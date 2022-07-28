<template>
    <div>
        <div>
            <div class="container mx-auto">
                <h1 class="text-lg font-bold">Serviços</h1>
                
                <NuxtLink to="/servicos/desenvolvimento-de-sites" >
                    Desenvolvimento de sites
                </NuxtLink>

                <NuxtLink to="/servicos/marketing-digital" >
                    Marketing digital
                </NuxtLink>

                <br><br>

                <pre>
                    <!-- {{ $fetchState }} -->
                </pre>

                <pre>
                    <div v-for="service in services " :key="service.id"> {{ service.username }}</div>
                </pre>

                <NuxtChild />

            </div>
        </div>
    </div>
</template>

<script>
import { set } from 'vue';

   export default {
    name:'',

    head() {
        return {
            title: this.title,
            meta: [
                { hid: 'description', name: 'description', content: 'Minha descrição do serviço' }
                ],
                bodyAttrs: {
                    class: 'bg-gray-400'
                }
        }
    },

    data() {
        return {
            title: '',
            services: []
        };
    },

    async fetch() {
        this.services = await this.$axios.$get('users')
    },

    created() {
        this.getTitle();
    },

    methods: {
        getTitle() {
            setTimeout(() => {
                this.title = 'Serviços'
            }, 3000)
        }
    },
   }
</script>