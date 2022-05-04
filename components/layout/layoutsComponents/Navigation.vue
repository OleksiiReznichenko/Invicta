<template>
  <div class="root">
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
        <div @click="changePositionOnMobile(navLeft, navRight)" class="search-container">
          <input @click="searchFunction " @keyup="searchFunction" ref="searchInput" v-model="searchValue"
          type="search" id="searchInput" placeholder="Search" />
          <img
            src="@/assets/svg/searchIcon.svg"
            alt="Search icon"
            class="search-icon"
          />
        </div>

        <div
          v-if="!isPhone && !isLoggedIn"
          key="nav-login-link"
          @click="isLoggedInToTrue"
          class="btn btn-gradient"
        >
        <span>Login</span>
        </div>
        <div
          v-if="!isPhone && !isLoggedIn"
          class="profile"
          id="dropdown-opener-parent"
          key="nav-profile"
        >
          <div class="profile__icon" id="dropdown-opener"><span>N</span></div>

          <NavDropdown />
        </div>

        <nuxt-link
          v-if="!isPhone && isLoggedIn"
          key="nav-login-link"
          to="/login"
          class="link-notification"
        >
          <img
            src="@/assets/svg/notification.svg"
            alt="Notification"
            class="link-icon"
          />
        </nuxt-link>
        <div
          v-if="!isPhone && isLoggedIn"
          class="profile"
          id="dropdown-opener-parent"
          key="nav-profile2"
        >
          <div class="profile-flex" id="dropdown-opener">
            <img
              :src="$store.state.user.avatar"
              alt="Avatar"
              class="user__icon"
            />
            <div class="user__name">{{$store.state.user.firstName}} {{$store.state.user.lastName}}</div>
          </div>
          <NavDropdown />
        </div>
      </div>

      <div ref="searchResultsContainer" class="search-results-container">
        <!-- <div class="close-search-btn">
            <svg class="close-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path class="close-icon__path" d="M18 6L6 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path class="close-icon__path" d="M6 6L18 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div> -->
        <SearchCategory v-for="(category, i) in productsFiltered"
         :key="category.toString() + Math.random()" 
         :categoryName='i'
         :categoryItems='category'
         />
      </div>
    </nav>

    <nav v-if="isPhone" key="nav-mobile" class="nav--mobile">
      <ul class="list">
        <li class="item">
          <nuxt-link class="link" to="/">
            <img src="@/assets/svg/home.svg" alt="Home" class="icon" />
            <span>Main</span>
          </nuxt-link>
        </li>
        <li class="item">
          <nuxt-link class="link" to="/browse">
            <img src="@/assets/svg/cart.svg" alt="Cart" class="icon" />
            <span>Browse</span>
          </nuxt-link>
        </li>
        <li class="item">
          <nuxt-link class="link" to="/profile">
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

export default {
    components: {
        NavDropdown,
        SearchCategory,
    },
    data() {
        return {
          isPhoneInitial: false,
          dropdownIndicator: false,
          isOpen: false,
          searchValue: '',
          searchValueValidated: '',
        }
    },
    computed: {
        isLoggedIn() {
          return this.$store.state.isLoggedIn
        },
        isPhone() {
          return this.isPhoneInitial
        },
        productsFiltered() {
          let productsObject = this.$store.state.products.products;


          const productsObjectToArray = Object.entries(productsObject);

          const productsObjectToArrayFiltered = productsObjectToArray.map(([key, value]) => {
            let filteredValue = value.filter(product => {
              return product.name.toLowerCase().includes(this.searchValueValidated);
            })


            return [key, filteredValue]
          })

          const productsObjectFiltered = Object.fromEntries(productsObjectToArrayFiltered);

          return productsObjectFiltered;
        },
    },
    created() {
        if (process.browser) {
        // eslint-disable-next-line nuxt/no-globals-in-created
        this.isPhoneInitial = window.outerWidth <= 600
        }
    },
    methods: {
        isLoggedInToFalse() {
            this.$store.commit('isLoggedInToFalse');
            this.$router.push('/');
        },
        isLoggedInToTrue() {
            this.$store.commit('isLoggedInToTrue');
            this.$router.push('/');
        },
        changePositionOnMobile(navLeft, navRight) {
          if (window.outerWidth > 600) return;
          navLeft.style.transform = 'translate(-20rem)';

          if (window.outerWidth < 600 && window.outerWidth >= 550) {
            navRight.style.transform = 'translate(18rem)';
          }

          if (window.outerWidth < 550 && window.outerWidth >= 500) {
            navRight.style.transform = 'translate(16rem)';
          }

          if (window.outerWidth < 500 && window.outerWidth >= 450) {
            navRight.style.transform = 'translate(14rem)';
          }

          if (window.outerWidth < 450 && window.outerWidth >= 400) {
            navRight.style.transform = 'translate(12rem)';
          }

          if (window.outerWidth < 400) {
            navRight.style.transform = 'translate(10rem)';
          }

          this.isOpen = true;
        },
        validateSearchValue() {
          this.searchValueValidated = '';
          if (this.searchValue.includes(' ') >= 0) {
            const searchInputArr = this.$refs.searchInput.value.split(' ');

            // eslint-disable-next-line array-callback-return
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
        searchFunction(e) {
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
          // else {
          //   if (this.$refs.searchResultsContainer.classList.contains('opened')) {
          //     this.$refs.searchResultsContainer.style.opacity = 0;

          //     setTimeout(() => {
          //         this.$refs.searchResultsContainer.style.display = 'none';
          //         this.$refs.searchResultsContainer.classList.remove('opened');
          //     }, 200);
          //   }
          // }

        }
    },

    watch: {
      searchValue(newValue, oldValue) {
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
      }
    },
    mounted() {
      this.navLeft = document.querySelector('.nav__left');
      this.navRight = document.querySelector('.nav__right');

      window.addEventListener('click', (e) => {
          if (window.outerWidth <= 600 && this.isOpen) {
            const isClickInsideElement = this.navRight.contains(e.target);

            if (!isClickInsideElement) {
              this.navLeft.style.transform = 'translate(0)';
              this.navRight.style.transform = 'translate(0)';
              this.isOpen = false;
            }
          }

          if (this.$refs?.searchResultsContainer.classList.contains('opened')) {
            const isClickInsideElement = this.$refs.searchResultsContainer.contains(e.target);
            const isClickInsideElement2 = this.$refs.searchInput.contains(e.target);

            if (!isClickInsideElement && !isClickInsideElement2 && this.$refs.searchResultsContainer.classList.contains('opened')) {
                // this.$refs.searchInput.value = '';
                
                this.$refs.searchResultsContainer.style.transition = 'all .2s';

                this.$refs.searchResultsContainer.style.opacity = 0;

                setTimeout(() => {
                    this.$refs.searchResultsContainer.style.display = 'none';
                    this.$refs.searchResultsContainer.classList.remove('opened');
                }, 200);
            }
          }

          
      });

      window.addEventListener('resize', () => {
        if (window.outerWidth <= 600) {
            this.isPhoneInitial = true
        } else {
            this.isPhoneInitial = false
        }
      });
    },
}
</script>

<style lang="scss" scoped>
.root {
  // position: relative;
  // z-index: 10000;
  width: 100%;
  overflow: hidden;
  // height: 100vh;
  // position: relative;
  // z-index: 10000;
}

.nav {
  // width: 100%;
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10000;
  font-size: 1.4rem !important;
  transition: all .3s;

  @media only screen and (max-width: 600px) {
    justify-content: flex-start;
    top: 5rem;
    // width: 50rem;
  }

  @media only screen and (max-width: 600px) and (max-height: 700px) {
    top: 2.5rem;
  }

  &__left {
    display: flex;
    align-items: center;
    transition: all .3s;

    @media only screen and (max-width: 600px) {
      order: 1;
    }
  }

  &__right {
    display: flex;
    align-items: center;
    transition: all .3s;

    @media only screen and (max-width: 600px) {
      order: 0;
      width: 40%;
    }
  }

  .logo {
    width: 3rem;
    height: 3rem;
    margin-right: 3.5rem;

    @media only screen and (max-width: 600px) {
      margin-right: 0;
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

  .search-results-container {
    position: absolute;
    top: 4rem;
    right: 0;
    width: 100%;
    padding: 2.5rem;
    // height: 20rem;
    background-color: $color-grey-dark;
    border-radius: 30px;
    // display: grid;
    grid-row-gap: 3rem;
    max-height: 70vh;
    overflow-x: hidden;
    overflow-y: scroll;
    display: none;
    opacity: 0;
    // transition: all .1s;

    &::-webkit-scrollbar {
      height: 5px;
      width: 5px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 17px;
      background-color: #343234;
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

    // .close-search-btn {
    //   position: absolute;
    //   top: 0;
    //   right: 0;
    //   width: 5rem;
    //   height: 5rem;

    //   @media only screen and (min-width: 1000px) {
    //     display: none;
    //   }

    //   .close-icon {
    //     position: absolute;
    //     top: 1.5rem;
    //     right: 1.5rem;
    //     width: 2.5rem;
    //     height: 2.5rem;
    //   }
    // }
  }

  .search-container {
    // width: 10rem;
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

    @media only screen and (max-width: 600px) {
      width: 100%;
      border-radius: 6px;
      overflow: hidden;
      margin-right: 3rem;
    }
  }

  .search-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: 1.75rem;
    height: 1.75rem;

    @media only screen and (max-width: 600px) {
      width: 2rem;
      height: 2rem;
      // left: 2rem;
    }
  }

  #searchInput {
    width: 100%;
    padding-left: 3rem;
    color: white;
    font-family: Montserrat;

    @media only screen and (max-width: 600px) {
      padding: 1rem 2rem;
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

    .user__icon {
      margin-right: 1rem;
      width: 3rem !important;
      height: 3rem !important;
    }

    .user__name {
      font-weight: 300;
    }
  }

  .link-icon {
    width: 2rem;
    height: 2rem;
    margin-right: 2.5rem;
    @include abs-center;
  }

  .link-notification {
    position: relative;
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 2.5rem;
    // display: flex;
    // justify-content: center;
    // align-items: center;
  }
}

.nav--mobile {
  width: 100%;
  background-color: rgba($color-grey-2, 0.9);
  padding: 2rem 0;
  position: fixed;
  bottom: 0;
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
