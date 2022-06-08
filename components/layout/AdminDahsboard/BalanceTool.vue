<template>
    <div class="balance-tool">
        <div class="select">
            <input ref="actionDropdownOpener" id="actionDropdownOpener" @click="toggleActionDropdown" v-model="balanceAction" class="full-width" type="text" placeholder="Select the action" readonly>
            <img ref="actionDropdownArrow" id="actionDropdownArrow" src="@/assets/svg/arrowSmall.svg" alt="Arrow" class="arrow">
            <div ref="actionSelectionDropdown" id="actionSelectionDropdown" class="options">
                <div @click="selectActionOption('Add')" class="option">Add</div>
                <div @click="selectActionOption('Remove')" class="option">Remove</div>
            </div>
        </div>
        <div class="input-group">
            <input @keypress.enter="updateBalance" ref="userIdInput" id="userIdInput" v-model="userId" class="full-width" type="text" placeholder="User ID">
        </div>
        <div class="input-group">
            <input @keypress.enter="updateBalance" ref="amountInput" id="amountInput" v-model="amount" class="full-width" type="number" placeholder="Amount in dollars">
        </div>
        <button @click="updateBalance" class="btn btn-gradient"><span>Update balance</span></button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            balanceAction: null,
            userId: null,
            amount: null,
        }
    },

    computed: {
        users() {
            return this.$store.state.users.users;
        }
    },

    methods: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // UPDATE BALANCE
        updateBalance() {
            // IF TYPE OF ACTION IS NOT SELECTED - SHOW ERROR
            if (!this.balanceAction) {
                this.$store.dispatch('showNotificationWindow', {
                    text: 'You must select the type of action', 
                    isBad: true
                });
                return;
            }
            
            // IF USER ID OF ACTION IS NOT SELECTED - SHOW ERROR
            if (!this.userId) {
                this.$store.dispatch('showNotificationWindow', {
                    text: 'You must select the user ID', 
                    isBad: true
                });
                this.$refs.userIdInput.focus();
                return;
            }

            const user = this.users.find(el => {
                return el.id === this.userId;
            });
            
            // IF USER ID DOESN'T EXIST - SHOW ERROR
            if (!user) {
                this.$store.dispatch('showNotificationWindow', {
                    text: 'This user ID doesn\'t exist', 
                    isBad: true
                });
                this.$refs.userIdInput.focus();
                return;
            }
            
            // IF AMOUNT IS NOT SELECTED - SHOW ERROR
            if (!this.amount) {
                this.$store.dispatch('showNotificationWindow', {
                    text: 'You must select the amount', 
                    isBad: true
                });
                this.$refs.amountInput.focus();
                return;
            }
            
            // IF AMOUNT IS LESS THAN 1 - SHOW ERROR
            if (+this.amount < 1) {
                this.$store.dispatch('showNotificationWindow', {
                    text: 'The amount must be more than 1', 
                    isBad: true
                });
                this.$refs.amountInput.focus();
                return;
            }
            
            // IF ACTION IS REMOVE AND USER BALANCE DOESN'T HAVE SO MUCH MONEY - SHOW ERROR
            if (this.balanceAction === 'Remove' && +this.amount > user.balance) {
                this.$store.dispatch('showNotificationWindow', {
                    text: 'This user\'s balance is less than the amount', 
                    isBad: true
                });
                this.$refs.amountInput.focus();
                return;
            }

            this.$store.commit('users/updateUserBalance', {id: this.userId, action: this.balanceAction, amount: +this.amount});

            // IF BALANCE IS SUCCESSFULLY UPDATED - SHOW MESSAGE
            this.$store.dispatch('showNotificationWindow', {
                text: 'This user\'s balance is successfully updated', 
                isBad: false
            });
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // PAYMENTS SELECTION DROPDOWN
        toggleActionDropdown() {
            if (!this.actionSelectionDropdown.classList.contains('opened')) {
                this.actionSelectionDropdown.classList.add('opened');
                this.actionSelectionDropdown.style.display = 'block';
                this.actionDropdownArrow.style.transform = 'rotate(-180deg)';
                setTimeout(() => {
                    this.actionSelectionDropdown.style.opacity = 1;
                }, 10);
            } else {
                this.actionSelectionDropdown.style.opacity = 0;
                this.actionDropdownArrow.style.transform = 'rotate(0deg)';
                setTimeout(() => {
                    this.actionSelectionDropdown.style.display = 'none';
                    this.actionSelectionDropdown.classList.remove('opened');
                }, 200);
            }
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // SELECTION PAYMENTS OPTION FUNCTIONAL
        selectActionOption(option) {
            this.actionDropdownOpener.value = option;
            this.balanceAction = option;
        },
    },

    mounted () {
        this.actionSelectionDropdown = document.getElementById('actionSelectionDropdown');
        this.actionDropdownArrow = document.getElementById('actionDropdownArrow');
        this.actionDropdownOpener = document.getElementById('actionDropdownOpener');

        window.addEventListener('click', (e) => {
            const dropdownPaymentsOpener = this.actionDropdownOpener.contains(e.target);
            
            if (!dropdownPaymentsOpener && this.actionSelectionDropdown.classList.contains('opened')) {
                this.actionSelectionDropdown.style.opacity = 0;
                this.actionDropdownArrow.style.transform = 'rotate(0deg)';
                setTimeout(() => {
                    this.actionSelectionDropdown.style.display = 'none';
                    this.actionSelectionDropdown.classList.remove('opened');
                }, 200);
            }
        })
    },
}
</script>

<style lang="scss" scoped>
.balance-tool {
    background-color: $color-grey-dark;
    box-shadow: 0 .5rem 5rem rgba(0, 0, 0, 0.4);
    padding: 3.5rem;
    border-radius: 10px;
    width: 50rem;
    margin: 0 auto;
    margin-top: 5rem;

    @media only screen and (max-width: 450px) {
        width: 45rem;
    }

    .select {
        margin-bottom: 1.25rem;
    }

    .input-group {

        &:not(:last-of-type) {
            margin-bottom: 1.25rem;
        }
    }

    input {
        font-family: Montserrat;
        display: block;
        box-shadow: 0 .3rem 1rem 0 rgba(#000000, .2) inset,
        0 .3rem 1rem 0 rgba(#19151F, .5);
        background-color: #111111;
        padding: 1.2rem 2.75rem;
        border-radius: 9px;
        width: 100%;
        color: white;
        

        &::placeholder {
            color: white;
        }
    }

    .btn {
        margin-top: 2.5rem;
        padding: 1rem 2.5rem;
        font-weight: 500 !important;
    }
}
</style>