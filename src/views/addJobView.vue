<script setup>
  import router from '@/router';
  import { useToast } from 'vue-toastification';
  import { reactive } from 'vue';
  import axios from 'axios';
  import backButton from '@/components/backButton.vue';

  const form = reactive({
    type: 'Full-Time',
    title: '',
    description: '',
    salary: '',
    location: '',
    company: {
      name: '',
      description: '',
      contactEmail: '',
      contactPhone: '',
    }
  })

  const toast = useToast()

  const handleSubmit = async () => {
     const newJob = {
      title: form.title,
      type: form.type,
      location: form.location,
      description: form.description,
      salary: form.salary,
      company: {
        name: form.company.name,
        description: form.company.description,
        contactEmail: form.company.contactEmail,
        contactPhone: form.company.contactPhone
      },
      createdTime: Date.now()
     };

     try {
    const response = await axios.post('/api/jobs', newJob)
    toast.success('The form has been added successfully')
    router.push(`/jobs/${response.data.id}`)
  } catch (error) {
    console.log('Error fetching jobs');
    toast.error('Job was not added')
  } 
  }
  
</script>

<template>
  <backButton />
  <section class="bg-green-50">
      <div class="container m-auto max-w-2xl py-24">
        <div
          class="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
        >
          <form @submit.prevent="handleSubmit">
            <h2 class="text-3xl text-center font-semibold mb-6">Add Job</h2>

            <div class="mb-4">
              <label for="type" class="block text-gray-700 font-bold mb-2"
                >Job Type</label
              >
              <select
              v-model="form.type"
                id="type"
                name="type"
                class="border rounded w-full py-2 px-3"
                required
              >
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Remote">Remote</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2"
                >Job Listing Name</label
              >
              <input
                type="text"
                v-model="form.title"
                id="name"
                name="name"
                class="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Beautiful Apartment In Miami"
                required
              />
            </div>
            <div class="mb-4">
              <label
                for="description"
                class="block text-gray-700 font-bold mb-2"
                >Description</label
              >
              <textarea
                id="description"
                v-model="form.description"
                name="description"
                class="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="Add any job duties, expectations, requirements, etc"
              ></textarea>
            </div>

            <div class="mb-4">
              <label for="type" class="block text-gray-700 font-bold mb-2"
                >Salary</label
              >
              <select
                id="salary"
                v-model="form.salary"
                name="salary"
                class="border rounded w-full py-2 px-3"
                required
              >
                <option value="0 - 50">0 - 50</option>
                <option value="50 - 60">50 - 60</option>
                <option value="60 - 70">60 - 70</option>
                <option value="70 - 80">70 - 80</option>
                <option value="80 - 90">80 - 90</option>
                <option value="90 - 100">90 - 100</option>
                <option value="100 - 125">100 - 125</option>
                <option value="125 - 150">125 - 150</option>
                <option value="150 - 175">150 - 175</option>
                <option value="175 - 200">175 - 200</option>
                <option value="200 - 900">200 - 900</option>
              </select>
            </div>

            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2">
                Location
              </label>
              <input
                type="text"
                v-model="form.location"
                id="location"
                name="location"
                class="border rounded w-full py-2 px-3 mb-2"
                placeholder="Company Location"
                required
              />
            </div>

            <h3 class="text-2xl mb-5">Company Info</h3>

            <div class="mb-4">
              <label for="company" class="block text-gray-700 font-bold mb-2"
                >Company Name</label
              >
              <input
                type="text"
                v-model="form.company.name"
                id="company"
                name="company"
                class="border rounded w-full py-2 px-3"
                placeholder="Company Name"
              />
            </div>

            <div class="mb-4">
              <label
                for="company_description"
                class="block text-gray-700 font-bold mb-2"
                >Company Description</label
              >
              <textarea
                id="company_description"
                v-model="form.company.description"
                name="company_description"
                class="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="What does your company do?"
              ></textarea>
            </div>

            <div class="mb-4">
              <label
                for="contact_email"
                class="block text-gray-700 font-bold mb-2"
                >Contact Email</label
              >
              <input
                type="email"
                v-model="form.company.contactEmail"
                id="contact_email"
                name="contact_email"
                class="border rounded w-full py-2 px-3"
                placeholder="Email address for applicants"
                required
              />
            </div>
            <div class="mb-4">
              <label
                for="contact_phone"
                class="block text-gray-700 font-bold mb-2"
                >Contact Phone</label
              >
              <input
                type="tel"
                v-model="form.company.contactPhone"
                id="contact_phone"
                name="contact_phone"
                class="border rounded w-full py-2 px-3"
                placeholder="Optional phone for applicants"
              />
            </div>

            <div>
              <button
                class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </section> 
</template>