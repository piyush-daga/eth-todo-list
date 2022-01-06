App = {
    loading: false,
    contracts: {},

    load: async () => {
      await App.loadWeb3(),
      await App.loadAccount()
    },

    // https://medium.com/metamask/https-medium-com-metamask-breaking-change-injecting-web3-7722797916a8
    loadWeb3: async () => {
        // Modern dapp browsers...
        if (window.ethereum) {
            try {
                // Request account access if needed
                await ethereum.request('eth_requestAccounts');
            } catch (error) {
                // User denied account access...
            }
        }
    },

    loadAccount: async () => {
        App.account = await ethereum.request({ method: "eth_accounts"})
        console.log(App.account[0])
    },
}

$(() => {
    $(window).load(() => {
        App.load()
    })
})