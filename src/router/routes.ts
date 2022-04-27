const getPath = (page: string[]) =>
  page
    .map((path) => {
      if (path === "index") return "";
      if (path === "~") return ":pathMatch(.*)*";
      if (path.startsWith("^")) path = path.replace("^", "");
      if (path.startsWith("_")) path = path.replace("_", ":");
      return path;
    })
    .join("/")
    .replace(new RegExp("///", "g"), "/")
    .replace(new RegExp("//", "g"), "/");

const makeRoute = async (page: string[]) => {
  const path = "/" + getPath(page);
  // to understand why we need to use several conditional statement here, see: https://github.com/vitejs/vite/issues/4945
  if (page.length == 1) {
    var { default: component } = await import(`../views/${page[0]}.vue`);
  } else if (page.length == 2) {
    var { default: component } = await import(
      `../views/${page[0] + "/" + page[1]}.vue`
    );
  } else if (page.length == 3) {
    var { default: component } = await import(
      `../views/${page[0] + "/" + page[1] + "/" + page[2]}.vue`
    );
  } else if (page.length == 4) {
    var { default: component } = await import(
      `../views/${page[0] + "/" + page[1] + "/" + page[2] + "/" + page[3]}.vue`
    );
  }

  const { displayName = "", middlewares = [], name = "" } = component;
  return {
    path,
    name,
    component,
    meta: { middlewares, displayName },
  };
};

const allViews = import.meta.glob("../views/**/*.vue");

const allPages = Object.keys(allViews)
  .map((key: string) => key.slice(9).replace(".vue", "").split("/"))
  .map((path) => {
    let parent = null as null | string;

    const nestedIndex = path.findIndex((p) => p.startsWith("^"));
    if (nestedIndex > -1) parent = getPath(path.slice(0, nestedIndex));
    return { parent, path };
  });

const nestedPages = allPages.filter((page) => page.parent);

export const routes = allPages
  .filter((page) => !page.parent)
  .map(async (page) => {
    const path = getPath(page.path);
    const childrenPages = nestedPages
      .filter((p) => p.parent === path)
      .map((p) => p.path);

    const route = await makeRoute(page.path);
    const children = await Promise.all(childrenPages.map(makeRoute));

    return { ...route, children };
  });
