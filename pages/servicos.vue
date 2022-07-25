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
                    {{ $fetchState }}
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

   export default {
    name:'',

    data() {
        return {
            services: []
        };
    },

    async fetch() {
        this.services = await this.$axios.$get('https://jsonplaceholder.typicode.com/users')
    },

    methods: {},
   }
</script>