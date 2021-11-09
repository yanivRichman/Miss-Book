import { bookService } from '../services/book-service.js';

export default {
    template: `
        <section class="book-edit">
            <h3>Find and Add new Books:</h3>
            <form @submit.prevent="save" >
                <input v-model.lazy="bookToEdit" type="text" placeholder="Search for a book">
                <button>Save</button>
            </form>
        </section>
    `,
    data() {
        return {
            bookToEdit: bookService.getBook()
        };
    },
    methods: {
        save() {
            bookService.save(this.bookToEdit)
               
        }
    }
};