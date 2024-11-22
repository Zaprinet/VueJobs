<script setup>
import { useToast} from 'vue-toastification';
import axios from 'axios';
import { useRouter } from 'vue-router';

const toast = useToast()
const router = useRouter()

const props = defineProps({
  message: {
    type: String,
    default: "Are You Sure You Want To Delete?"
  },
  job: {
    type: Object,
    default: {}
  },
  handlerReturn: {
    type: Function,

  }
});
const emit = defineEmits(['cancelButton'])


const handleDelete = async () => {
  console.log(props.job);
  try {
   
    await axios.delete(`/api/jobs/${props.job.id}`)
    toast.success('Job deleted')
    router.push('/jobs')
   
  } catch (error) {
    console.log('Failed to delete', error);
    toast.error('Failed to delete')
  }

}

function emitter() {
  emit('cancelButton')
}


</script>

<template>
  <div class="confirm-popup-overlay">
    <div class="popUp">
      <h3 class="popUpText">{{ message }}</h3>
      <button class="noButton" @click="emitter">No, Cancel!</button>
      <button class="yesButton" @click="handleDelete">Yes, Delete!</button>
    </div>
  </div>
</template>

<style lang="css" scoped>
 .confirm-popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  }

  .popUp {
    background-color: rgb(255, 255, 255);
    position: absolute;
    width: 30%;
    height: 20%;
    text-align: center;
    padding: 45px;
    border-radius: 15px;
    transition: all 1000ms ease-out !important;
  }

  .popUpText {
    color: rgb(0, 0, 0);
    margin-bottom: 10px;
  }

  .noButton {
    background-color: rgb(247, 1, 1);
    margin: 10px;
    border-radius: 5px;
    padding: 3px;
    padding-left: 8px;
    padding-right: 8px;
    color: white;
  }
  .yesButton {
    background-color: green;
    margin: 10px;
    border-radius: 5px;
    padding: 3px;
    padding-left: 8px;
    padding-right: 8px;
    color: white;
  }
</style>