import { bookService } from '../services/book-service.js';

export default {
    template: `
        <section class="book-edit">
            <h3>Find and Add new Books:</h3>
            <form @submit.prevent="search">
                <input v-model="searchStr" type="text" placeholder="Search for a book">
                <button type="submit">search</button>
            </form>
            <!-- here you need to render the book list you got (v-for) -->
            <!-- each book has its title and a button for adding it to the whole book array -->
        </section>
    `,
    data() {
        return {
            searchStr: '',
            bookToEdit: bookService.getBook(),
        };
    },
    methods: {
        search() {
            //TODO: call a bookService function to do the axios request by the 'this.searchStr' and get back the result
            //the book list you get is the list you need to render under the  input / need to search for each book title for rendring
        },
        save(book) {
            // TODO: here we gt the book we want to add/ need to call a bookService function, that converts the book the a normal object as we used till now, and save it to the localStorage with all the books

            // bookService.save(this.bookToEdit);
        },
    },
};
