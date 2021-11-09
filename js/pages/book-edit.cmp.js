import { bookService } from '../services/book-service.js';

export default {
    template: `
        <section class="book-edit">
            <h3>Find and Add new Books:</h3>
            <form action="">
                <label for="gsearch">
                    <input v-model.lasy="searchTerm" type="search" id="gsearch" name="gsearch" placeholder="Search for a book" >  
                </label> 
                <button @click.prevent="search"> Search</button> 
            </form>  
            <template v-if="searchRes" v-for="book in searchRes">
               <li >{{book.volumeInfo.title}}</li>
               <button @click="addGglBook(book.id)">Add</button>
         </template> 
        </section>
    `,
    data() {
        return {
            searchTerm: null,
            searchRes: null,
        };
    },
    methods: {
        search() {
            bookService.getBooks(this.searchTerm)
                .then(this.setRes)
        },
        setRes(res) {
            this.searchRes = res;
        },
        addGglBook(id) {
            var book = this.searchRes.find(book => book.id === id)     
            bookService.addGoogleBook(book)
        }
    },
};
