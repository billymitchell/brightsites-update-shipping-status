import fetch from 'node-fetch';
import {} from 'dotenv/config';

let stores = [
  // {
  //   Subdomain: 'ftg-test',
  //   API_Key: `${process.env.ftg-test}`,
  // },
  {
    Subdomain: 'fbla',
    API_Key: `${process.env.fbla}`,
  },
  {
    Subdomain: 'crescentmto',
    API_Key: `${process.env.crescentmto}`,
  },
  {
    Subdomain: 'amentumfundraising',
    API_Key: `${process.env.amentumfundraising}`,
  },
  {
    Subdomain: 'fbinaa',
    API_Key: `${process.env.fbinaa}`,
  },
  {
    Subdomain: 'crescent',
    API_Key: `${process.env.crescent}`,
  },
  {
    Subdomain: 'usfuniformstore',
    API_Key: `${process.env.usfuniformstore}`,
  },
  {
    Subdomain: 'keystonerv',
    API_Key: `${process.env.keystonerv}`,
  },
  {
    Subdomain: 'edtainventory',
    API_Key: `${process.env.edtainventory}`,
  },
  {
    Subdomain: 'amentuminventory',
    API_Key: `${process.env.amentuminventory}`,
  },
  {
    Subdomain: 'centricityppe',
    API_Key: `${process.env.centricityppe}`,
  },
  {
    Subdomain: 'tcom',
    API_Key: `${process.env.tcom}`,
  },
  {
    Subdomain: 'murlarkeyppe',
    API_Key: `${process.env.murlarkeyppe}`,
  },
  {
    Subdomain: 'healthcentric',
    API_Key: `${process.env.healthcentric}`,
  },
  {
    Subdomain: 'amentumsafety',
    API_Key: `${process.env.amentumsafety}`,
  },
  {
    Subdomain: 'centricitycollection',
    API_Key: `${process.env.centricitycollection}`,
  },
  {
    Subdomain: 'milehigh',
    API_Key: `${process.env.milehigh}`,
  },
  {
    Subdomain: 'bpahonorsstore',
    API_Key: `${process.env.bpahonorsstore}`,
  },
  {
    Subdomain: 'ritzcarlton',
    API_Key: `${process.env.ritzcarlton}`,
  },
  {
    Subdomain: 'deltamudelta',
    API_Key: `${process.env.deltamudelta}`,
  },
  {
    Subdomain: 'sheraton',
    API_Key: `${process.env.sheraton}`,
  },
  {
    Subdomain: 'ryderscs',
    API_Key: `${process.env.ryderscs}`,
  },
  {
    Subdomain: 'ryderfms',
    API_Key: `${process.env.ryderfms}`,
  },
  {
    Subdomain: 'namebadges',
    API_Key: `${process.env.namebadges}`,
  },
  {
    Subdomain: 'hyattstore',
    API_Key: `${process.env.hyattstore}`,
  },
  {
    Subdomain: 'flik',
    API_Key: `${process.env.flik}`,
  },
  {
    Subdomain: 'bonappetit',
    API_Key: `${process.env.bonappetit}`,
  },
  {
    Subdomain: 'euresthero',
    API_Key: `${process.env.euresthero}`,
  },
  {
    Subdomain: 'uscca',
    API_Key: `${process.env.uscca}`,
  },
  {
    Subdomain: 'flikpsr',
    API_Key: `${process.env.flikpsr}`,
  },
  {
    Subdomain: 'pkpretractablebanner',
    API_Key: `${process.env.pkpretractablebanner}`,
  },
  // {
  //   Subdomain: 'era',
  //   API_Key: `${process.env.era}`,
  // },
  {
    Subdomain: 'valotteryuniforms',
    API_Key: `${process.env.valotteryuniforms}`,
  },
  {
    Subdomain: 'usfitness',
    API_Key: `${process.env.usfitness}`,
  },
  {
    Subdomain: 'mycompasscatalog',
    API_Key: `${process.env.mycompasscatalog}`,
  },
  {
    Subdomain: 'egroup',
    API_Key: `${process.env.egroup}`,
  },
  {
    Subdomain: 'fccla',
    API_Key: `${process.env.fccla}`,
  },
  {
    Subdomain: 'forbestravelinternational',
    API_Key: `${process.env.forbestravelinternational}`,
  },
  {
    Subdomain: 'tsastore',
    API_Key: `${process.env.tsastore}`,
  },
  {
    Subdomain: 'skillsusastore',
    API_Key: `${process.env.skillsusastore}`,
  },
  {
    Subdomain: 'forbestravelguide',
    API_Key: `${process.env.forbestravelguide}`,
  },
  {
    Subdomain: 'phikappaphi',
    API_Key: `${process.env.phikappaphi}`,
  },
  {
    Subdomain: 'marriott',
    API_Key: `${process.env.marriott}`,
  },
];

// update order function
async function updateOrder(Subdomain, Order_ID, API_Key, payload) {
  let url = `https://${Subdomain}.mybrightsites.com/api/v2.3.0/orders/${Order_ID}?token=${API_Key}`;

  let response = await fetch(url, {
    method: 'PUT',
    redirect: 'follow',
    headers: {
      'Content-Type': 'application/json',
    },
    body: payload,
  });
  // // if error
  if (!response.ok) {
    console.log('Response Status Not Okay: ', response);
    // if no error
  }
  if (response.ok) {
    // set json to data
    let data = await response.json();
    return data;
  }
}

stores.forEach((store) => {
  let Subdomain = store.Subdomain;
  let API_Key = store.API_Key;

  //fetch data function
  async function fetchOrders(Subdomain, API_Key) {
    let url = `https://${Subdomain}.mybrightsites.com/api/v2.3.0/orders?token=${API_Key}`;

    let response = await fetch(url, {
      method: 'GET',
      redirect: 'follow',
      headers: {
        Accept: 'application/json',
      },
    });
    // // if error
    if (!response.ok) {
      console.log('Response Status Not Okay: ', response);
      // if no error
    }
    if (response.ok) {
      // set json to data
      let data = await response.json();
      return data;
    }
  }

  // simplified fetch
  async function getOrders() {
    // initialize order data
    let orderData = '';
    // set data
    orderData = await fetchOrders(Subdomain, API_Key);

    orderData.orders.forEach((order) => {
      // if tracking number for whole order

      let Order_ID = order.order_id;

      if (order.status == 'new') {
        //set order status to in_progress
        console.log("NEW ORDER: ", order);

        let payload = JSON.stringify({
          "order": {
          "status": "in_progress",
          }
        });

        updateOrder(Subdomain, Order_ID, API_Key, payload);

        console.log("Updated to 'IN Progress': ", order);

        console.log();
      }
      // if (order.status !== 'new') {
      //   console.log('not a new order');
      // }
    });
  }

  getOrders();
});
