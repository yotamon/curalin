<template >
    <div class="checkout-page">
        <Header />
        <PartnerLogos />
        <Hero />
        <GetDiscount />
        <CheckoutForm />
        <PaymentMethodSelection />
        <Footer />
        <MobilePaymentMethodSelection/>
        <MobileTotalSection/>
    </div>
</template> 

<script lang="ts">
    import { ref, defineComponent } from 'vue'
    import Header from '/src/components/sections/Header/Header.vue'
    import PartnerLogos from '/src/components/sections/PartnerLogos/PartnerLogos.vue'
    import Hero from '/src/components/sections/Hero/Hero.vue'
    import GetDiscount from '/src/components/sections/GetDiscount/GetDiscount.vue'
    import CheckoutForm from '/src/components/sections/CheckoutForm/CheckoutForm.vue'
    import PaymentMethodSelection from '/src/components/sections/PaymentMethodSelection/PaymentMethodSelection.vue'
    import Footer from '/src/components/sections/Footer/Footer.vue'
    import MobilePaymentMethodSelection from '/src/components/sections/MobilePaymentMethodSelection/MobilePaymentMethodSelection.vue'
    import MobileTotalSection from '/src/components/sections/MobileTotalSection/MobileTotalSection.vue'
    export default defineComponent({
    name: 'Checkout',
    components: {
        Header,
        PartnerLogos,
        Hero,
        GetDiscount,
        CheckoutForm,
        PaymentMethodSelection,
        Footer,
        MobilePaymentMethodSelection,
        MobileTotalSection
    },
    props: {
    },
    setup: () => {
        const count = ref(0)
        return { count }
    }
    })
</script>

<style lang="scss" src="./Checkout.scss" />