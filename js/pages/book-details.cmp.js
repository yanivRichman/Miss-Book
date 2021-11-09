import longText from '../cmps/long-text.cmp.js';
import { bookService } from '../services/book-service.js';

export default {
    template: `
        <section v-if="book" class="book-details app-main">
            <h3>Book Details:</h3>
            <p>Page Count : {{pageCount}}</p>
            <p>Published Date : {{publishedDate}}</p>
            <p>Price : <span :class="priceClass">{{this.book.listPrice.amount}} {{this.book.listPrice.currencyCode}}</span></p>
            <p>SALE? : {{isSale}}</p>
            <long-text :description="book.description"></long-text>
            <button @click="onClose" >X</button>
        </section>
    `,
        components: {
            longText
        },
    data() {
        return {
            book: null
        };
    },
    created() {
        const { bookId } = this.$route.params;
        bookService.getById(bookId)
            .then(book => this.book = book);
    },
    methods:{
        onClose(){
            this.$router.push('/book')
        }
    },
    computed: {
        pageCount() {
            const pageCount = this.book.pageCount
            if (pageCount > 500) return 'Long reading'
            if (pageCount > 200) return 'Decent Reading'
            if (pageCount < 100) return 'Light Reading'
            return pageCount
        },
        publishedDate() {
            const publishedDate = this.book.publishedDate
            if (2021 - publishedDate > 10) return 'Veteran Book'
            if (2021 - publishedDate < 1) return 'New!'
            return publishedDate
        },
        priceClass(){
            const price = this.book.listPrice.amount
            if (price > 150) return 'red'
            if (price < 20) return 'green'
            return price
        }, 
        isSale(){
            const isSale = this.book.listPrice.isOnSale
            if (isSale) return 'Yes Yes Yes !!!'
            return 'No'
        }
    }
}