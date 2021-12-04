<template>
    <div class="loader">
        <div class="loader-icon">
            {{txt}}
        </div>
    </div>
</template>

<script>
export default {
    name: "Loader",
    props: {
        txt: String
    },
    data() {
        return {
            loading: false
        }
    }
}
</script>

<style scoped>

    @keyframes ani {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(180deg);
        }
    }

    .loader .loader-icon {
        border: 4px solid #d00;
        background: chartreuse;
        animation: ani 0.5s infinite;
        width: 40px;
        height: 40px
    }
</style>