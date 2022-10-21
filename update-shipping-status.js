let stores = [
  {
    URL: '#',
    API_Key: '#',
  },
  {
    URL: '#',
    API_Key: '#',
  },
];

stores.forEach((store) => {
  
    // List All Orders
  let data = fetch(`${URL}/api/v2.3.0/orders?token=${API_Key}`;);

  data.orders.forEach((order) => {
    // if tracking number for whole order
    if (order.tracking != null) {
      //set order status to shipped
      fetch(`${URL}/api/v2.3.0/orders/${order_id}?token=${API_Key}`);

      let payload = {
              "order": {
                "status": "shipped",
              }
      }

    }
    // if tracking number for whole order is null
    if ((order.tracking = null)) {
      let current_order_id = order.order_id;

      // show order
      let single_order = fetch(
        `${URL}/api/v2.3.0/orders/${current_order_id}?token=${API_Key}`
      );

      // get list of shipments
      let items_in_shipments = [];

      single_order.shipments.forEach((individual_shipment) => {
        individual_shipment.line_items.forEach((item) => {
          // for each time quantity of item
          for (let i = 0; i < item.quantity; i++) {
            // pop the item in the empty array of shipped items
            items_in_shipments.pop(item.id);
          }
        });
      });

      let items_in_order_collection = [];

      single_order.line_items.forEach((item) => {
        for (let i = 0; i < item.quantity; i++) {
          // pop the item in the empty array of shipped items
          items_in_order_collection.pop(item.id);
        }
      });

      // all items have shipped
      if ((items_in_shipments = items_in_order_collection)) {
        //set order status to shipped
        fetch(`${URL}/api/v2.3.0/orders/${order_id}?token=${API_Key}`);

        let payload = {
                "order": {
                  "status": "shipped",
                }
        }

    }
    // else all items have not shipped (do nothing)
}

})
