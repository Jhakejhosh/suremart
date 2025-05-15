interface StepsType {
    id: number,
    title: string,
    text: string,
    color: string,
}


export const steps: StepsType[] = [
    {
        id: 1,
        title: "Search for product",
        text: "You can either use the search bar and category section to look for a product or directly go to product section",
        color: "orange"
    },
    {
        id: 2,
        title: "Add to cart",
        text: "Once you've seen what you want, you can either proceed to add to wishlist or add to cart ",
        color: "blue"
    },
    {
        id: 3,
        title: "Proceed to Checkout",
        text: "Go to cart icon to check and update the items you've selected and click on checkout",
        color: "green"
    },
    {
        id: 4,
        title: "Make payment",
        text: "Make payment through the service provided and wait for your delivery within 30min",
        color: "violet"
    }
]