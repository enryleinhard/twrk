<template>
  <div
    class="
      h-auto
      w-full
      bg-cream
      items-center
      content-center
      bottom-0
      text-gray-600
      border-t-3
      border-gray-600
    "
  >
    <div
      class="
        grid lg:grid-cols-3
        gap-y-8
        gap-x-20
        w-full
        mx-6
        my-auto
        p-10
        lg:pr-56
      "
    >
      <div class="w-auto h-auto text-left lg:text-left ">
        <p class="font-semibold text-primary text-2xl">Learn More</p>
        <hr class="w-auto my-3" />
        <div class="flex flex-col gap-3 text-primary ">
          <a href="/dashboard"
            ><div class="text-left lg:text-left hover:underline pt-2">
              <p class="font-medium text-l hover:text-light">Home</p>
            </div></a
          >
          <a href="/explore-project"
            ><div class="text-left lg:text-left hover:underline">
              <p class="font-medium text-l hover:text-light">Projects</p>
            </div></a
          >
          <a href="/profile"
            ><div class="text-left lg:text-left hover:underline">
              <p class="font-medium text-l hover:text-light">Profile</p>
            </div></a
          >
        </div>
      </div>
      
      <div class="w-auto h-auto text-left">
        <p class="font-semibold text-primary text-2xl">Get in Touch</p>
        <hr class="w-auto my-3" />

        <div class="flex flex-col gap-3 text-primary ">
          <a href="#" @click="emailFunction()"
            ><div
              class="flex flex-row gap-x-2 items-center pt-2 hover:text-light"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <p class="font-medium text-l"> customer @twrk.com </p>
            </div></a
          >
          <a href="#" @click="callFunction()"
            ><div class="flex flex-row gap-x-2 items-center hover:text-light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <p class="font-medium text-l">+852 2121 2121</p>
            </div></a
          >
          <a href="#" target="_blank"
            ><div class="flex flex-row gap-x-2 items-center hover:text-light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p class="font-medium text-l">CityU Hong Kong, Kowloon Tong</p>
            </div></a
          >
        </div>
      </div>

      <div class="w-auto h-auto ">
        <p class="font-semibold text-primary text-2xl text-left">Our Social Media</p>
        <hr class="w-auto my-3" />
        <div class="flex flex-row gap-x-5 text-left pt-2 ">
          <a href="" target="_blank"
            ><div
              class="fill-current hover:text-light w-8 h-8 rounded-full transition duration-500 ease-in-out transform hover:scale-110 grid justify-items-center"
            >
              <svg
                class="w-8 h-8 my-auto"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 172 172"
                style=" fill:#000000;"
              >
                <g
                  fill="none"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray=""
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                  style="mix-blend-mode: normal"
                >
                  <path d="M0,172v-172h172v172z" fill="none"></path>
                  <g class="fill-current text-primary hover:text-light">
                    <path
                      d="M86,21.5c-35.5587,0 -64.5,28.9413 -64.5,64.5c0,35.5587 28.9413,64.5 64.5,64.5c35.5587,0 64.5,-28.9413 64.5,-64.5c0,-35.5587 -28.9413,-64.5 -64.5,-64.5zM86,32.25c29.74897,0 53.75,24.00103 53.75,53.75c0,27.0222 -19.82471,49.24186 -45.75049,53.09912v-37.42553h15.30616l2.40405,-15.54761h-17.71021v-8.49292c0,-6.45538 2.12086,-12.18823 8.15698,-12.18823h9.7002v-13.56347c-1.70387,-0.23113 -5.30974,-0.73486 -12.12524,-0.73486c-14.233,0 -22.5708,7.51416 -22.5708,24.63891v10.34058h-14.63428v15.54761h14.63428v37.28906c-25.51305,-4.20792 -44.91065,-26.23252 -44.91065,-52.96265c0,-29.74897 24.00103,-53.75 53.75,-53.75z"
                    ></path>
                  </g>
                </g>
              </svg></div
          ></a>
          <a href="#" target="_blank"
            ><div
              class="w-8 h-8 rounded-full transition duration-500 ease-in-out transform hover:scale-110 grid justify-items-center"
            >
              <svg
                class="my-auto w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 172 172"
                style=" fill:#000000;"
              >
                <g
                  fill="none"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray=""
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                  style="mix-blend-mode: normal"
                >
                  <path d="M0,172v-172h172v172z" fill="none"></path>
                  <g class="fill-current text-primary hover:text-light ">
                    <path
                      d="M57.33333,21.5c-19.7585,0 -35.83333,16.07483 -35.83333,35.83333v57.33333c0,19.7585 16.07483,35.83333 35.83333,35.83333h57.33333c19.7585,0 35.83333,-16.07483 35.83333,-35.83333v-57.33333c0,-19.7585 -16.07483,-35.83333 -35.83333,-35.83333zM57.33333,35.83333h57.33333c11.85367,0 21.5,9.64633 21.5,21.5v57.33333c0,11.85367 -9.64633,21.5 -21.5,21.5h-57.33333c-11.85367,0 -21.5,-9.64633 -21.5,-21.5v-57.33333c0,-11.85367 9.64633,-21.5 21.5,-21.5zM121.83333,43c-3.95804,0 -7.16667,3.20863 -7.16667,7.16667c0,3.95804 3.20863,7.16667 7.16667,7.16667c3.95804,0 7.16667,-3.20863 7.16667,-7.16667c0,-3.95804 -3.20863,-7.16667 -7.16667,-7.16667zM86,50.16667c-19.7585,0 -35.83333,16.07483 -35.83333,35.83333c0,19.7585 16.07483,35.83333 35.83333,35.83333c19.7585,0 35.83333,-16.07483 35.83333,-35.83333c0,-19.7585 -16.07483,-35.83333 -35.83333,-35.83333zM86,64.5c11.85367,0 21.5,9.64633 21.5,21.5c0,11.85367 -9.64633,21.5 -21.5,21.5c-11.85367,0 -21.5,-9.64633 -21.5,-21.5c0,-11.85367 9.64633,-21.5 21.5,-21.5z"
                    ></path>
                  </g>
                </g>
              </svg></div
          ></a>
          <a href="#" target="_blank"
            ><div
              class="w-8 h-8 rounded-full transition duration-500 ease-in-out transform hover:scale-110 grid justify-items-center"
            >
              <svg
                class="w-6 h-6 my-auto"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 172 172"
                style=" fill:#000000;"
              >
                <g
                  fill="none"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray=""
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                  style="mix-blend-mode: normal"
                >
                  <path d="M0,172v-172h172v172z" fill="none"></path>
                  <g class="fill-current text-primary hover:text-light ">
                    <path
                      d="M172,30.82226c-6.4388,2.85547 -12.9056,5.01107 -20.07226,5.73894c7.16667,-4.3112 12.9056,-11.47787 15.76107,-19.3724c-7.16667,4.31119 -14.33333,7.16667 -22.19988,8.6224c-7.16667,-7.16667 -16.48893,-11.47787 -26.51106,-11.47787c-19.3724,0 -35.13347,15.76107 -35.13347,35.10547c0,2.88346 0,5.73893 0.72786,7.89453c-29.39453,-1.42774 -55.17773,-15.06119 -72.39453,-36.56119c-3.58333,5.03906 -5.01107,11.47786 -5.01107,17.91667c0,12.20573 6.43881,22.95573 15.76107,29.39453c-5.73893,-0.72786 -11.44987,-2.1556 -15.76107,-4.31119c0,0 0,0 0,0.72786c0,17.18881 12.17774,31.52214 27.93881,34.4056c-2.85547,0.69988 -5.71094,1.42774 -9.29427,1.42774c-2.1556,0 -4.3112,0 -6.4668,-0.72786c4.31119,14.33333 17.2168,24.38346 32.97786,24.38346c-12.17773,9.32227 -27.23893,15.03321 -43.72786,15.03321c-2.85547,0 -5.73893,0 -8.5944,-0.69988c15.76107,10.02214 34.4056,15.76107 53.75,15.76107c65.22787,0 100.33333,-53.75 100.33333,-100.33333c0,-1.42774 0,-2.85547 0,-4.31119c7.16667,-5.01107 12.9056,-11.44988 17.91667,-18.61654"
                    ></path>
                  </g>
                </g>
              </svg></div
          ></a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style scoped>

</style>