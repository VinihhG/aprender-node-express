const UserController = {

    index: () => {
        return {
            action: 'index',
            status: 'success'
        }
    },

    show: () => {
        return {
            action: 'show',
            status: 'success'
        }
    },
    
    store: () => {
        return {
            action: 'store',
            status: 'success'
        }
    },

    update: () => {
        return {
            action: 'update',
            status: 'success'
        }
    }
}


module.exports = UserController;