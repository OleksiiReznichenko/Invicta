<template>
  <div class="navigation-root root">
    <nav class="section nav">
      <div class="nav__left">
        <nuxt-link class="link-logo" to="/">
          <img src="@/assets/img/logo.png" alt="Logo" class="logo" />
        </nuxt-link>
        <ul v-if="!isPhone" key="nav-desktop-list" class="list">
          <li>
            <nuxt-link to="/browse">Browse</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/updates">Updates</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/leaderboard">Leaderboard</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="nav__right">
        <div ref="searchContainer" class="search-container">
          <input @focus="focusSearch" @blur="unfocusSearch" @click="searchFunction" @keyup="searchFunction" ref="searchInput" v-model="searchValue"
          type="text" id="searchInput" placeholder="Search" />
          <img
            src="@/assets/svg/searchIcon.svg"
            alt="Search icon"
            class="search-icon"
          />
        </div>

        <div class="notifications-container" id="notifications-opener-parent">
          <button ref="notificationsButton" @click="toggleNotificationsDropdown" class="link-notification" id="notifications-opener">
            <img
              src="@/assets/svg/notification.svg"
              alt="Notification"
              class="link-icon"
            />
          </button>
          <div class="notifications-dropdown" id="notifications-dropdown">
            <div @click="checkLink" class="top-notifications top">
              <h4 class="title-notifications title">Notifications</h4>
              <nuxt-link v-if="isLoggedIn" class="link" to="/dashboard">Dashboard</nuxt-link>
            </div>
            <div @click="closeNotificationsDropdown" class="notifications-list">
              <Notification
              v-for="(notification, i) in notificationsArray"
              :key="i"
              :productId='notification.productId'
              :image='notification.image'
              :title='notification.title'
              :text='notification.text'
              :date='notification.date'
              />
            </div>
            </div>
        </div>

        <nuxt-link
        to="/login"
          v-if="!isLoggedIn"
          key="nav-login-link"
          class="btn btn-gradient login-button"
        >
        <span>Login</span>
        </nuxt-link>
        <div
          v-if="!isPhone && !isLoggedIn"
          class="profile"
          id="dropdown-opener-parent"
          key="nav-profile"
        >
          <div class="profile__icon" id="dropdown-opener"><span>N</span></div>

          <NavDropdown />
        </div>
        <div
          v-if="!isPhone && isLoggedIn"
          class="profile"
          id="dropdown-opener-parent"
          key="nav-profile2"
        >
          <div class="profile-flex" id="dropdown-opener">
            <img
              :src="userAvatar"
              alt="Avatar"
              class="user-avatar"
            />
            <div class="user__name">{{userUsername}}</div>
          </div>
          <NavDropdown />
        </div>
      </div>

      <div ref="searchResultsContainer" class="search-results-container">
        <SearchCategory v-for="(category, i) in productsObject"
         :key="i" 
         :categoryName='i'
         :categoryItems='category'
         />
      </div>
    </nav>

    <nav v-if="isPhone" key="nav-mobile" class="nav--mobile">
      <ul class="list">
        <li @click="checkLink" class="item">
          <nuxt-link class="link" to="/">
            <img src="@/assets/svg/home.svg" alt="Home" class="icon" />
            <span>Main</span>
          </nuxt-link>
        </li>
        <li @click="checkLink" class="item">
          <nuxt-link class="link" to="/browse">
            <img src="@/assets/svg/cart.svg" alt="Cart" class="icon" />
            <span>Browse</span>
          </nuxt-link>
        </li>
        <li v-if="!isLoggedIn" @click="checkLink" class="item">
          <nuxt-link class="link" to="/login">
            <img src="@/assets/svg/user.svg" alt="Profile" class="icon" />
            <span>Login</span>
          </nuxt-link>
        </li>
        <li v-if="isLoggedIn" @click="checkLink" class="item">
          <nuxt-link class="link" :to="'/users/' + userId">
            <img src="@/assets/svg/user.svg" alt="Profile" class="icon" />
            <span>Profile</span>
          </nuxt-link>
        </li>
        <li class="item">
          <div class="link" id="dropdown-opener">
            <img src="@/assets/svg/more.svg" alt="More" class="icon" />
            <span>More</span>
          </div>
        </li>
      </ul>
    </nav>
    <NavDropdown v-if="isPhone && !isLoggedIn" key="nav-mobile-dropdown" />
    <NavDropdown v-if="isPhone && isLoggedIn" key="nav-mobile-dropdown2" />
  </div>
</template>

<script>
import NavDropdown from '@/components/layout/layoutsComponents/NavDropdown';
import SearchCategory from '@/components/layout/layoutsComponents/SearchCategory';
import Notification from '@/components/layout/layoutsComponents/Notification';

export default {
    components: {
        NavDropdown,
        SearchCategory,
        Notification,
    },

    data() {
        return {
          isPhoneInitial: false,
          searchValue: '',
          searchValueValidated: '',
        }
    },

    computed: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // MY USER
        user() {
          return this.$store.state.users.users.find(el => {
              if (el.id === this.$store.state.user.id) {
                return el;
              }
          })
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // USER ID
        userId() {
          if (this.user) {
            return this.user.id;
          } else {
            return null;
          }
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // USER USERNAME
        userUsername() {
          if (this.user) {
            return this.user.username;
          } else {
            return null;
          }
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // USER AVATAR
        userAvatar() {
          if (this.user) {
            return this.user.avatar;
          } else {
            return null;
          }
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // IS LOGGED IN
        isLoggedIn() {
          return this.$store.state.isLoggedIn
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // IS PHONE VERSION
        isPhone() {
          return this.isPhoneInitial
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // NOTIFICATIONS ARRAY
        notificationsArray() {
          return this.$store.state.navigationNotifications.notifications;
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // PRODCUTS ARRAY
        products() {
          return this.$store.state.products.products;
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // ARRAY OF FILTERED PRODUCTS ON NAME SEARCH
        productsFiltered() {
          // PRODUCTS ARRAY
          const productsArray = this.$store.state.products.products;

          // PRODUCTS ARRAY FILTERED BY NAME
          const productsArrayFiltered = productsArray.filter((product) => {
              return product.name.toLowerCase().includes(this.searchValueValidated);
          })

          return productsArrayFiltered;
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // ARRAY CONVERTED TO OBJECT BY TYPES
        productsObject() {
          // ACCOUNTS ARRAY
          const accounts = this.productsFiltered.filter((product) => {
              return product.type === 'account';
          })

          // GIFTCARDS ARRAY
          const giftcards = this.productsFiltered.filter((product) => {
              return product.type === 'giftcard';
          })

          const productsObject = {
            Giftcards: giftcards,
            Accounts: accounts
          }

          return productsObject;
        },
    },
    
    methods: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // LOG OUT
        isLoggedInToFalse() {
            this.$store.commit('isLoggedInToFalse');
            this.$router.push('/');
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // LOG IN
        isLoggedInToTrue() {
            this.$router.push('/');
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // REMOVE EXCESSIVE WHITE SPACES IN VALUE AND CONVERT TO LOWERCASE
        validateSearchValue() {
          this.searchValueValidated = '';
          if (this.searchValue.includes(' ') >= 0) {
            const searchInputArr = this.$refs.searchInput.value.split(' ');

            const searchInputArr2 = searchInputArr.filter(el => {
              if (el.replace(/\s/g, '')) {
                return el.replace(/\s/g, '');
              }
            })

            const search = searchInputArr2.join(' ');
            this.searchValueValidated = search.toLowerCase();
          } else {
            this.searchValueValidated = this.searchValue.toLowerCase();
          }
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // SHOW SEARCH RESULTS CONTAINER ON CLICK AND KEY TYPING IF SEARCH INPUT CONTAINS LETTERS
        searchFunction() {
          if (this.searchValueValidated) {
            if (!this.$refs.searchResultsContainer.classList.contains('opened')) {
              this.$refs.searchResultsContainer.style.transition = 'none';
              this.$refs.searchResultsContainer.classList.add('opened');
              this.$refs.searchResultsContainer.style.display = 'grid';

              setTimeout(() => {
                  this.$refs.searchResultsContainer.style.opacity = 1;
              }, 10);
            }
          }
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // CLOSE DROPDOWN BEFORE GOING TO ANOTHER PAGE
        checkLink(e) {
            const target = e.target.tagName.toLowerCase();
            if (target == 'a' || target == 'span' || target == 'img' && this.dropdown.classList.contains('opened')) {
                this.dropdown.style.opacity = 0;
                setTimeout(() => {
                    this.dropdown.style.display = 'none';
                    this.dropdown.classList.remove('opened');
                }, 200)

                this.nav.classList.remove('navigation-to-fit');
            }
            
            if (target == 'a') {
                this.closeNotificationsDropdown();
            }
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // TOGGLE NOTIFICATIONS DROPDOWN
        toggleNotificationsDropdown() {
            if (!this.notificationsDropdown.classList.contains('opened')) {
                this.notificationsDropdown.classList.add('opened');
                this.notificationsDropdown.style.display = 'block';
                setTimeout(() => {
                    this.notificationsDropdown.style.opacity = 1;
                }, 10);
            } else {
                this.closeNotificationsDropdown();
            }
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // CLOSE NOTIFICATIONS DROPDOWN
        closeNotificationsDropdown() {
            if (this.notificationsDropdown.classList.contains('opened')) {
              this.notificationsDropdown.style.opacity = 0;
              setTimeout(() => {
                  this.notificationsDropdown.style.display = 'none';
                  this.notificationsDropdown.classList.remove('opened');
              }, 200);
            }
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // FOCUS SEARCH EVENT
        focusSearch() {
            if (window.outerWidth <= 850 && window.outerHeight > 600 && window.outerWidth > 600 || window.outerWidth < 600) {
              this.nav.classList.add('focused-search');
            }
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // UNFOCUS SEARCH EVENT
        unfocusSearch(e) {
            this.nav.classList.remove('focused-search');
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // UNFOCUS SEARCH EVENT
        changeNotficationIconStyle(value) {
            if (value === true) {
              this.notificationsDropdownContainer.style.right = '0';
            } else if (value === false) {
              this.notificationsDropdownContainer.style.right = '13rem';
            }
        },
    },

    watch: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // HIDE SEARCH RESULTS CONTAINER IF SEARCH INPUT IS EMPTY
      searchValue() {
        this.validateSearchValue();
        if (this.searchValueValidated) return;
        if (this.$refs.searchResultsContainer.classList.contains('opened')) {
            this.$refs.searchResultsContainer.style.transition = 'none';
            this.$refs.searchResultsContainer.style.opacity = 0;

            setTimeout(() => {
                this.$refs.searchResultsContainer.style.display = 'none';
                this.$refs.searchResultsContainer.classList.remove('opened');
            }, 200);
          }
      },
      
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // CHANGE NOTIFICATIONS ICON RIGHT POSITION ON LOGGED IN
      isLoggedIn(newValue, oldValue) {
        this.nav.classList.remove('navigation-to-fit');
        if (window.outerWidth > 850 || window.outerWidth < 850 && window.outerHeight < 600) return
          this.changeNotficationIconStyle(newValue);
      }
    },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // CHECK MOBILE VERSION
    created() {
        if (process.browser) {
          this.isPhoneInitial = window.outerWidth <= 850 && window.outerHeight > 600 || window.outerWidth < 600;
        }
    },

    mounted() {
      // DOM
      this.navLeft = document.querySelector('.nav__left');
      this.navRight = document.querySelector('.nav__right');
      this.nav = document.querySelector('.nav');
      this.dropdown = document.getElementById('dropdown');
      this.notificationsDropdown = document.getElementById('notifications-dropdown');
      this.notificationsDropdownOpener = document.getElementById('notifications-opener');
      this.notificationsDropdownContainer = document.getElementById('notifications-opener-parent');

      this.changeNotficationIconStyle(this.isLoggedIn);

      // CLOSE DROPDOWN AND CHANGE STYLES BACK ON UNFOCUS
      window.addEventListener('click', (e) => {
          // CLOSE SEARCH RESULTS CONTAINER ON UNFOCUS
          if (!this.$refs.searchResultsContainer) return;

          if (this.$refs.searchResultsContainer.classList.contains('opened')) {
            const isClickInsideElement = this.$refs.searchResultsContainer.contains(e.target);
            const isClickSearchInput = this.$refs.searchInput.contains(e.target);

            if (!isClickInsideElement && !isClickSearchInput && this.$refs.searchResultsContainer.classList.contains('opened')) {
                
                this.$refs.searchResultsContainer.style.transition = 'all .2s';

                this.$refs.searchResultsContainer.style.opacity = 0;

                setTimeout(() => {
                    this.$refs.searchResultsContainer.style.display = 'none';
                    this.$refs.searchResultsContainer.classList.remove('opened');
                }, 200);
            }
          }

          if (this.notificationsDropdown.classList.contains('opened')) {
            const isClickInsideElement = this.notificationsDropdown.contains(e.target);
            const isClickInsideElement2 = this.notificationsDropdownOpener.contains(e.target);

            if (!isClickInsideElement && 
            !isClickInsideElement2 && 
            !e.target.classList.contains('notifications-dropdown') &&
            !e.target.classList.contains('top-notifications') &&
            !e.target.classList.contains('title-notifications')) {
                
              this.closeNotificationsDropdown();
            }
          }
      });


      // RESIZE
      window.addEventListener('resize', () => {
        this.dropdown = document.getElementById('dropdown');
        if (window.outerWidth <= 850 && window.outerHeight > 600 && window.outerWidth > 600 || window.outerWidth < 600) {
            this.isPhoneInitial = true;
        } else {
            this.isPhoneInitial = false;
        }
      });
    },
}
</script>

<style lang="scss" scoped>
.root {
  width: 100%;
  overflow: hidden;
}

.focused-search {
  .nav__right {
    width: 100% !important;
    background-color: $color-grey;
    box-shadow: 0px .5rem 5rem 0px rgba(#000000, .4);
    padding: 1.5rem;
    padding-left: 1rem;
    border-radius: 6px;
    margin-right: 2rem;
  }

  .nav__left {
    display: none;
  }

  .notifications-container {
    display: none;
  }

  .search-icon {
    left: 1rem !important;
  }

  .search-container {
    margin-right: 0 !important;
  }
}

.nav {
  position: absolute;
  top: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10000;
  font-size: 1.4rem !important;
  transition: all .3s;

  @media only screen and (max-width: 850px) and (min-height: 600px),
  only screen and (max-width: 600px) {
    justify-content: flex-start;
    top: 5rem;
  }

  @media only screen and (min-width: 1000px) {
    width: 80% !important;
  }

  @media only screen and (max-width: 1000px) and (min-height: 600px) and (min-width: 850px) {
    width: 90% !important;
  }

  @media only screen and (max-width: 850px) and (min-height: 600px) and (min-width: 600px) {
    width: 66%;
  }

  @media only screen and (max-width: 850px) and (max-height: 600px) and (min-width: 600px) {
    width: 80% !important;
  }

  @media only screen and (max-width: 850px) and (min-height: 600px) and (max-height: 700px) and (min-width: 600px) {
    top: 2.5rem;
  }

  &__left {
    display: flex;
    align-items: center;
    transition: all .3s;

    // @media only screen and (max-width: 850px) and (min-height: 600px),
    // only screen and (max-width: 600px) {
    //   order: 1;
    // }
  }

  &__right {
    display: flex;
    align-items: center;
    transition: all .3s;

    @media only screen and (max-width: 850px) and (min-height: 600px),
    only screen and (max-width: 600px) {
      order: 0;
      width: 40%;
    }
  }

  .logo {
    width: 3rem;
    height: 3rem;
    margin-right: 3.5rem;

    @media only screen and (max-width: 850px) and (min-height: 600px),
    only screen and (max-width: 600px) {
      margin-right: 1rem;
      width: 3.5rem;
      height: 3.5rem;
    }
  }

  .list {
    display: flex;
  }

  li {
    &:not(:last-of-type) {
      margin-right: 2.75rem;
    }
  }

  a {
    transition: all 0.3s;

    &:hover {
      color: darken($color-text-grey, 10%);
    }
  }

  .login-button {
    @media only screen and (max-width: 850px) and (min-height: 600px),
    only screen and (max-width: 600px) {
      position: absolute;
      top: 0;
      right: 0%;
      padding: 1.25rem 0;
      text-align: center;
      width: 12rem;
      font-weight: 500 !important;
    }
  }

  .notifications-container {
    position: relative;

    @media only screen and (max-width: 850px) and (min-height: 600px),
    only screen and (max-width: 600px) {
      position: absolute;
      top: .8rem;
      right: 13rem;
    }
  }

  #notifications-dropdown {
    background-color: $color-grey-dark;
    box-shadow: 0 .5rem 5rem rgba(black, .4);
    border-radius: 15px;
    padding: 2.5rem 0;
    position: absolute;
    top: 115%;
    right: 2rem;
    transition: all .2s;
    display: none;
    opacity: 0;
    min-width: 28rem;

    .top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 2.5rem;
      margin-bottom: 1.5rem;

      .title {
        font-weight: 500 !important;
        font-size: 1.6rem;
        margin-right: 5rem;
      }

      .link {
        font-weight: 700 !important;
        font-size: 1.5rem;
        margin-bottom: -4px;
        background: $gradient-primary;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        transition: all .3s;

        &:hover {
          opacity: .8;
        }
      }
    }
  }

  .search-results-container {
    position: absolute;
    top: 4rem;
    right: 0;
    max-width: 100%;
    width: 100%;
    padding: 2.5rem;
    background-color: $color-grey-dark;
    box-shadow: 0px .5rem 5rem 0px rgba(#000000, .4);    border-radius: 30px;
    grid-row-gap: 3rem;
    max-height: 70vh;
    overflow-x: hidden;
    overflow-y: scroll;
    display: none;
    opacity: 0;

    &::-webkit-scrollbar {
      height: 6px;
      width: 6px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 17px;
      background-color: #615f61;
    }

    &::-webkit-scrollbar-track {
      background-color: $color-grey;
      margin: 22px 0 22px;
    }

    @media only screen and (max-width: 1300px) {
      grid-row-gap: 30px;
    }

    @media only screen and (max-width: 900px) {
      padding: 4rem;
      top: 35px;
    }
  }

  .search-container {
    width: 15rem;
    margin-right: 1rem;
    position: relative;

    @media only screen and (max-width: 900px) {
      width: 11rem;
    }

    @media only screen and (max-width: 700px) {
      width: 12rem;
    }

    @media only screen and (max-width: 1050px) and (max-height: 520px) {
      width: 14rem;
    }

    @media only screen and (max-width: 850px) and (min-height: 600px),
    only screen and (max-width: 600px) {
      width: 100%;
      border-radius: 6px;
      margin-right: 3rem;
    }
  }

  .search-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 1.75rem;
    height: 1.75rem;

    left: .5rem;

    @media only screen and (max-width: 850px) and (min-height: 600px),
    only screen and (max-width: 600px) {
      width: 2rem;
      height: 2rem;
    }
  }

  #searchInput {
    width: 100%;
    padding-left: 3rem;
    color: white;
    font-family: Montserrat;

    @media only screen and (max-width: 850px) and (min-height: 600px),
    only screen and (max-width: 600px) {
      padding: 1rem 2rem;
      padding-right: 1rem;
      padding-left: 4rem;
    }

    &::placeholder {
      color: $color-text-grey;
    }
  }

  .profile-flex {
    display: flex;
    align-items: center;
    cursor: pointer;

    .user-avatar {
      margin-right: 1rem;
      width: 3rem !important;
      height: 3rem !important;
      border-radius: 100%;
      object-fit: cover;
    }

    .user__name {
      font-weight: 300;
    }
  }

  .link-icon {
    width: 2rem;
    height: 2rem;
    min-width: 17px;
    min-height: 17px;
    margin-right: 2.5rem;
    @include abs-center;

    @media only screen and (max-width: 850px) and (min-height: 600px),
    only screen and (max-width: 600px) {
      width: 3.25rem;
      height: 3.25rem;
      margin-right: 0;
    }
  }

  .link-notification {
    position: relative;
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 2.5rem;
    cursor: pointer;

    @media only screen and (max-width: 850px) and (min-height: 600px),
    only screen and (max-width: 600px) {
      width: 3.75rem;
      height: 3.75rem;
      margin-right: 0;
    }
  }
}

.nav--mobile {
  width: 100%;
  background-color: rgba($color-grey-2, 0.9);
  padding: 2rem 0;
  position: fixed;
  bottom: -2px;
  left: 0;
  z-index: 10000;

  .list,
  .link {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item {
    &:not(:last-of-type) {
      margin-right: 8rem;

      @media only screen and (max-width: 450px) {
        margin-right: 6rem;
      }
    }
  }

  .link {
    flex-direction: column;
    cursor: pointer;

    .icon {
      width: 2.5rem;
      height: 2.5rem;
      margin-bottom: 1rem;
    }

    span {
      font-weight: 600;
    }
  }
}

.btn {
  padding: 0.6rem 3.5rem;
}
</style>
