<template>
    <div>
        <div>
            <div class="container mx-auto">
                <h1 class="text-lg font-bold">Produtos</h1>
                <NuxtLink to="/produtos/produto-a">Produtos A</NuxtLink>
                <NuxtLink to="/produtos/produto-b">Produtos B</NuxtLink>

                <br>
                <br>

                <pre>
                    {{ products }}

                </pre>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente repellendus ad eaque, praesentium aliquam odio quia et, laboriosam sint minus nostrum omnis tempora quis. Minus ad dicta saepe mollitia nesciunt.</p>
            </div>
        </div>
    </div>
</template>

<script>

   export default {
    name:'',

    data() {
        return {
        };
    },

    async asyncData({ $axios }) {

      const products = await $axios.$get('posts?_limit=3')  
      return {
        products,
      }
    },

    methods: {

    },
   };
</script>