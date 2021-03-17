export default {
  translation: {
    common: {
      price: "{{value, currency}}",
      related: "Related",
    },
    frontpage: {
      title: "Κεντρική",
    },
    customer: {
      name: "Ονοματεπώνυμο",
      firstName: "Όνομα",
      lastName: "Επώνυμο",
      streetAddress: "Διεύθυνση",
      postalCode: "Ταχυδρομικός κώδικας",
      email: "Email",
      emailPlaceholder: "you@your.place",
      login: {
        title: "Σύνδεση",
        loggedIn: "Είστε συνδεδεμένος/η",
        instructions:
          "Εισάγετε τη διεύθυνση ηλεκτρονικού ταχυδρομίου σας και θα σας στείλουμε ένα σύνδεσμο σύνδεσης στο λογαριασμό σας.",
        emailAddressInvalid: "Παρακαλώ εισάγετε έναν έγκυρο σύνδεσμο",
        sendMagicLink: "Στείλε μου σύνδεσμο",
      },
    },
    basket: {
      title: "Καλάθι",
      loading: "Περίμενε. Φορτώνουμε το καλάθι σου...",
      removeItem: "Αφαίρεσε {{name}} από το καλάθι",
      empty: "Το καλάθι σου είναι άδειο",
      empty_inCheckout: "Δεν έχεις προϊόντα στο καλάθι",
      remainingUntilFreeShipping:
        "Πρόσθεσε {{amount, currency}} στην παραγγελία σου για δωρεάν μεταφορικά.",
      totalPrice: "Συνολική τιμή",
      discount: "Έκπτωση",
      totalPriceAfterDiscount: "Τελική τιμή μετά την έκπτωση",
      shippingPrice: "Μεταφορικά",
      tax: "ΦΠΑ",
      totalToPay: "Αξία",
      goToCheckout: "Oλοκλήρωση παραγγελίας",
    },
    product: {
      relatedProduct: "Σχετικό προϊόν",
      relatedProduct_plural: "Σχετικά προϊόντα",
      addToBasket: "Προσθήκη στο καλάθι",
      noVariants: "This product has no variants",
      buy: "ΑΓΟΡΑ",
      outOfStock: "Μη διαθέσιμο",
      stock: "{{stockCount}} σε αποθεμα",
      attributes: {
        color: "Χρώμα",
        green: "Πράσινο",
        blue: "Μπλε",
        black: "Μαύρο",
      },
    },

    layout: {
      menu: "Μενού",
      ecomBy: "Ηλεκτρονικό κατάστημα από",
      loadingVideo: "Το βίνετο φορτώνει",
      slider: {
        previous: "Δείτε το προηγούμενο αντικείμενο",
        next: "Δείτε το επόμενο αντικείμενο",
      },
      builtWith: "Built with {{- link}}",
      poweredBy: "Powered by {{- link}}",
      searchPlaceholder: "Search",
    },
    search: {
      label: "Αναζήτηση",
      foundResults: "Found {{count}} matching result",
      foundResults_plural: "Found {{count}} matching results",
      orderTitle: "Order by",
      order: {
        ITEM_NAME_ASC: "Name ascending",
        ITEM_NAME_DESC: "Name descending",
        PRICE_ASC: "Price ascending",
        PRICE_DESC: "Price descending",
        STOCK_ASC: "Stock ascending",
        STOCK_DESC: "Stock descending",
      },
      filter: "Filter",
      filterResults: "Filter results",
      facets: {
        viewNResults: "Show {{count}} result",
        viewNResults_plural: "Show {{count}} results",
        price: {
          title: "Price",
          min: "Minimum price",
          max: "Maximum price",
        },
      },
    },
  },
}
