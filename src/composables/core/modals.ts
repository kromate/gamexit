import { ref } from 'vue'
import { useModal } from './modal'
import SaveBlock from '@/components/modals/stage/SaveBlock.vue'


type StageTypes = 'SaveBlock'


const StageModals = { SaveBlock } as Record<StageTypes, any>


export const modal = useModal(ref([] as any))
const stageModal = modal.register('Stage', StageModals)


export const useStageModal = () => stageModal

