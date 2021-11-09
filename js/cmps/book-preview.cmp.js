export default {
    props: ['book'],
    template: `
        <div class="book-preview">
            <p>Title : {{book.title}}</p>
            <p>Price: {{book.listPrice.amount}}{{currencyIcon}}</p>
        </div>
    `,
    computed: {
        currencyIcon() {
            const currencyCode = this.book.listPrice.currencyCode
            if (currencyCode === 'ILS') return '₪'
            if (currencyCode === 'USD') return '$'
            if (currencyCode === 'EUR') return '€'
        }
    }
}