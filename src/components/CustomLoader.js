import React from "react";

const CustomLoader = () => {
  return (
    <div className="customloader" style={{ flexDirection: "row" }}>
      <div id="logo">
        <svg
          width="112"
          height="110"
          viewBox="0 0 112 110"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke="white"
            stroke-width="3"
            id="letter1"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M111.896 0.35199V110H88.792V54.1947L63.9175 110H48.2137L23.192 53.9992V110H0.0880127V0.35199H22.4402L56.064 75.4803L89.6879 0.35199H111.896ZM56.064 87.72L19.2 5.35199H5.08801V105H18.192V30.552L51.456 105H60.672L93.792 30.696V105H106.896V5.35199H92.928L56.064 87.72Z"
          />
        </svg>

        <svg
          width="91"
          height="93"
          viewBox="0 0 91 93"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke="white"
            stroke-width="3"
            id="letter2"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M67.008 77.7854C65.0953 79.6505 62.874 81.3327 60.344 82.832C55.256 85.808 49.304 87.296 42.488 87.296C35.48 87.296 29.144 85.568 23.48 82.112C17.816 78.656 13.352 73.808 10.088 67.568C6.82399 61.328 5.19199 54.224 5.19199 46.256C5.19199 38.192 6.82399 31.136 10.088 25.088C13.352 18.944 17.816 14.192 23.48 10.832C29.24 7.47199 35.624 5.79199 42.632 5.79199C49.544 5.79199 55.544 7.28 60.632 10.256C63.05 11.6703 65.1754 13.2581 67.008 15.0194C69.0315 16.9641 70.6982 19.1203 72.008 21.488V7.088H85.256V86H72.008V71.312C70.681 73.6711 69.0143 75.8289 67.008 77.7854ZM67.008 84.3695C65.7172 85.3523 64.3444 86.2734 62.893 87.1335L62.8807 87.1407L62.8684 87.1479C56.9017 90.6379 50.0507 92.296 42.488 92.296C34.615 92.296 27.3688 90.3421 20.8757 86.3802C14.3892 82.4224 9.31513 76.878 5.6575 69.8855C1.97265 62.8409 0.191986 54.9239 0.191986 46.256C0.191986 37.513 1.96454 29.6188 5.68026 22.7275C9.34875 15.8279 14.4353 10.3839 20.929 6.53172L20.9448 6.52235L20.9606 6.51311C27.5249 2.68397 34.7856 0.791992 42.632 0.791992C50.2767 0.791992 57.1793 2.44401 63.1564 5.94006C64.5116 6.73269 65.7964 7.58051 67.008 8.48423V2.088H90.256V91H67.008V84.3695ZM56.1184 25.1001L56.0586 25.0645C52.8345 23.1454 49.2606 22.168 45.224 22.168C41.1491 22.168 37.5477 23.1166 34.3127 24.9652C31.1535 26.7704 28.5714 29.4221 26.5771 33.0916C24.6428 36.6507 23.584 40.9844 23.584 46.256C23.584 51.6254 24.6438 56.0645 26.5878 59.7281C28.581 63.3882 31.1701 66.0981 34.3517 68.001C37.5766 69.835 41.1654 70.776 45.224 70.776C49.2919 70.776 52.8879 69.8306 56.1187 67.9883C59.399 66.0773 62.0223 63.3672 64.0044 59.7276C65.9541 56.0533 67.008 51.6587 67.008 46.4C67.008 41.1284 65.9492 36.7947 64.0149 33.2356C62.0368 29.5959 59.4281 26.9473 56.1792 25.134L56.1184 25.1001ZM58.616 72.32C54.584 74.624 50.12 75.776 45.224 75.776C40.328 75.776 35.864 74.624 31.832 72.32C27.8 69.92 24.584 66.512 22.184 62.096C19.784 57.584 18.584 52.304 18.584 46.256C18.584 40.304 19.784 35.12 22.184 30.704C24.584 26.288 27.8 22.928 31.832 20.624C35.864 18.32 40.328 17.168 45.224 17.168C50.12 17.168 54.584 18.368 58.616 20.768C62.744 23.072 66.008 26.432 68.408 30.848C70.808 35.264 72.008 40.448 72.008 46.4C72.008 52.352 70.808 57.584 68.408 62.096C66.008 66.512 62.744 69.92 58.616 72.32Z"
          />
        </svg>

        <svg
          class="letter"
          width="91"
          height="93"
          viewBox="0 0 91 93"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke="white"
            stroke-width="3"
            id="letter3"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M67.008 77.7854C65.0953 79.6505 62.874 81.3327 60.344 82.832C55.256 85.808 49.304 87.296 42.488 87.296C35.48 87.296 29.144 85.568 23.48 82.112C17.816 78.656 13.352 73.808 10.088 67.568C6.82399 61.328 5.19199 54.224 5.19199 46.256C5.19199 38.192 6.82399 31.136 10.088 25.088C13.352 18.944 17.816 14.192 23.48 10.832C29.24 7.47199 35.624 5.79199 42.632 5.79199C49.544 5.79199 55.544 7.28 60.632 10.256C63.05 11.6703 65.1754 13.2581 67.008 15.0194C69.0315 16.9641 70.6982 19.1203 72.008 21.488V7.088H85.256V86H72.008V71.312C70.681 73.6711 69.0143 75.8289 67.008 77.7854ZM67.008 84.3695C65.7172 85.3523 64.3444 86.2734 62.893 87.1335L62.8807 87.1407L62.8684 87.1479C56.9017 90.6379 50.0507 92.296 42.488 92.296C34.615 92.296 27.3688 90.3421 20.8757 86.3802C14.3892 82.4224 9.31513 76.878 5.6575 69.8855C1.97265 62.8409 0.191986 54.9239 0.191986 46.256C0.191986 37.513 1.96454 29.6188 5.68026 22.7275C9.34875 15.8279 14.4353 10.3839 20.929 6.53172L20.9448 6.52235L20.9606 6.51311C27.5249 2.68397 34.7856 0.791992 42.632 0.791992C50.2767 0.791992 57.1793 2.44401 63.1564 5.94006C64.5116 6.73269 65.7964 7.58051 67.008 8.48423V2.088H90.256V91H67.008V84.3695ZM56.1184 25.1001L56.0586 25.0645C52.8345 23.1454 49.2606 22.168 45.224 22.168C41.1491 22.168 37.5477 23.1166 34.3127 24.9652C31.1535 26.7704 28.5714 29.4221 26.5771 33.0916C24.6428 36.6507 23.584 40.9844 23.584 46.256C23.584 51.6254 24.6438 56.0645 26.5878 59.7281C28.581 63.3882 31.1701 66.0981 34.3517 68.001C37.5766 69.835 41.1654 70.776 45.224 70.776C49.2919 70.776 52.8879 69.8306 56.1187 67.9883C59.399 66.0773 62.0223 63.3672 64.0044 59.7276C65.9541 56.0533 67.008 51.6587 67.008 46.4C67.008 41.1284 65.9492 36.7947 64.0149 33.2356C62.0368 29.5959 59.4281 26.9473 56.1792 25.134L56.1184 25.1001ZM58.616 72.32C54.584 74.624 50.12 75.776 45.224 75.776C40.328 75.776 35.864 74.624 31.832 72.32C27.8 69.92 24.584 66.512 22.184 62.096C19.784 57.584 18.584 52.304 18.584 46.256C18.584 40.304 19.784 35.12 22.184 30.704C24.584 26.288 27.8 22.928 31.832 20.624C35.864 18.32 40.328 17.168 45.224 17.168C50.12 17.168 54.584 18.368 58.616 20.768C62.744 23.072 66.008 26.432 68.408 30.848C70.808 35.264 72.008 40.448 72.008 46.4C72.008 52.352 70.808 57.584 68.408 62.096C66.008 66.512 62.744 69.92 58.616 72.32Z"
          />
        </svg>
        <svg
          class="letter"
          width="81"
          height="91"
          viewBox="0 0 81 91"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke="white"
            stroke-width="3"
            id="letter4"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M23.192 12.5833C24.8366 11.1828 26.6739 9.97504 28.704 8.96001C33.216 6.75201 38.16 5.64801 43.536 5.64801C53.136 5.64801 60.912 8.57601 66.864 14.432C72.816 20.192 75.792 28.544 75.792 39.488V86H62.832V41.36C62.832 33.488 60.864 27.488 56.928 23.36C52.992 19.136 47.616 17.024 40.8 17.024C33.888 17.024 28.368 19.184 24.24 23.504C20.208 27.824 18.192 34.112 18.192 42.368V86H5.08801V7.08801H18.192V18.32C19.5925 16.1415 21.2591 14.2293 23.192 12.5833ZM23.192 6.36076C24.2351 5.68255 25.3274 5.05814 26.4679 4.48788L26.4871 4.47832L26.5062 4.46893C31.75 1.90285 37.4529 0.64801 43.536 0.64801C54.2284 0.64801 63.33 3.94829 70.3567 10.8541C77.5548 17.8296 80.792 27.6514 80.792 39.488V91H57.832V41.36C57.832 34.2781 56.0677 29.7033 53.3093 26.8104L53.2895 26.7896L53.27 26.7686C50.4508 23.7432 46.5012 22.024 40.8 22.024C35.0331 22.024 30.9082 23.7746 27.8755 26.9369C25.0113 30.0191 23.192 34.8901 23.192 42.368V91H0.0880127V2.08801H23.192V6.36076Z"
          />
        </svg>
        <svg
          class="letter"
          width="79"
          height="114"
          viewBox="0 0 79 114"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke="white"
            stroke-width="3"
            id="letter5"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.0056 109.113L19.9554 109.089C14.0892 106.374 9.29768 102.591 5.76011 97.684L5.74423 97.662L5.72858 97.6398C2.14102 92.5477 0.32123 86.7142 0.208765 80.3037L0.119507 75.216H23.6918L24.1502 79.7084C24.5095 83.2294 25.8918 86.1036 28.366 88.529C30.5956 90.5437 34.1865 91.92 39.912 91.92C45.348 91.92 48.9448 90.5906 51.3257 88.5332C53.8607 86.3301 55.072 83.684 55.072 80.216C55.072 77.3352 54.3043 75.4704 53.1504 74.1591C51.5966 72.3934 49.6304 71.0126 47.1514 70.036C44.2372 68.888 40.1743 67.6018 34.8899 66.1859C28.1493 64.427 22.5622 62.6271 18.2144 60.7637L18.1942 60.7551L18.174 60.7462C13.4283 58.6627 9.38068 55.4393 6.03558 51.2022L5.9908 51.1455L5.94768 51.0875C2.33674 46.2314 0.783995 40.0834 0.783995 33.128C0.783995 26.7613 2.41874 20.9402 5.78521 15.8324C9.12645 10.7629 13.7666 6.91162 19.5287 4.2522L19.5451 4.24466L19.5615 4.23723C25.3978 1.59437 31.9277 0.335999 39.048 0.335999C49.2969 0.335999 58.1454 2.90959 65.1727 8.45694C72.3176 14.0202 76.3887 21.5171 77.2878 30.6206L77.8301 36.112H53.4981L52.9506 31.7322C52.6593 29.4021 51.4589 27.1406 48.715 24.9158L48.6837 24.8904L48.6529 24.8646C46.2177 22.8243 42.7514 21.568 37.752 21.568C33.187 21.568 29.9353 22.7504 27.5609 24.7291L27.529 24.7557L27.4966 24.7818C25.4004 26.4704 24.176 28.8715 24.176 32.696C24.176 35.3476 24.8761 37.0692 25.9278 38.2911C27.5078 40.0018 29.4067 41.3385 31.6807 42.3052C34.5515 43.3765 38.633 44.6635 43.9876 46.1668C50.7134 48.0192 56.2964 49.9159 60.6486 51.8805C65.4967 53.968 69.5983 57.249 72.9441 61.5907C76.7217 66.3902 78.32 72.5968 78.32 79.64C78.32 85.4694 76.7635 90.963 73.7195 96.0365C70.594 101.246 66.0256 105.344 60.2476 108.397C54.3085 111.535 47.4754 113.008 39.912 113.008C32.7023 113.008 26.0546 111.752 20.0563 109.135L20.0056 109.113ZM69 64.664C66.12 60.92 62.664 58.184 58.632 56.456C54.6 54.632 49.272 52.808 42.648 50.984C37.176 49.448 32.904 48.104 29.832 46.952C26.856 45.704 24.312 43.928 22.2 41.624C20.184 39.32 19.176 36.344 19.176 32.696C19.176 27.608 20.904 23.672 24.36 20.888C27.816 18.008 32.28 16.568 37.752 16.568C43.608 16.568 48.312 18.056 51.864 21.032C55.416 23.912 57.432 27.272 57.912 31.112H72.312C72.1398 29.3681 71.8347 27.7014 71.3969 26.112C69.8826 20.6144 66.7796 16.041 62.088 12.392C56.136 7.688 48.456 5.336 39.048 5.336C32.52 5.336 26.712 6.488 21.624 8.792C16.632 11.096 12.744 14.36 9.96 18.584C7.17599 22.808 5.784 27.656 5.784 33.128C5.784 39.368 7.17599 44.36 9.96 48.104C12.84 51.752 16.248 54.44 20.184 56.168C24.216 57.896 29.544 59.624 36.168 61.352C41.544 62.792 45.816 64.136 48.984 65.384C52.152 66.632 54.792 68.456 56.904 70.856C59.016 73.256 60.072 76.376 60.072 80.216C60.072 85.112 58.248 89.144 54.6 92.312C51.048 95.384 46.152 96.92 39.912 96.92C33.384 96.92 28.392 95.336 24.936 92.168C21.576 88.904 19.656 84.92 19.176 80.216H5.20799C5.23833 81.945 5.41242 83.6116 5.73028 85.216C6.4184 88.6893 7.78031 91.8706 9.81599 94.76C12.792 98.888 16.872 102.152 22.056 104.552C27.336 106.856 33.288 108.008 39.912 108.008C46.824 108.008 52.824 106.664 57.912 103.976C63 101.288 66.84 97.784 69.432 93.464C72.024 89.144 73.32 84.536 73.32 79.64C73.32 73.304 71.88 68.312 69 64.664Z"
          />
        </svg>
        <svg
          class="letter"
          width="29"
          height="120"
          viewBox="0 0 29 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke="white"
            stroke-width="3"
            id="letter6"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M26.192 31.088V120H3.08801V31.088H26.192ZM14.856 28.272C11.0657 28.272 7.67239 26.9034 4.98447 24.2155C2.29656 21.5276 0.928009 18.1343 0.928009 14.344C0.928009 10.5537 2.29656 7.16037 4.98448 4.47245C7.67239 1.78454 11.0657 0.415985 14.856 0.415985C18.5926 0.415985 21.9097 1.81778 24.4897 4.52283C27.1445 7.20271 28.496 10.5773 28.496 14.344C28.496 18.1106 27.1445 21.4853 24.4897 24.1651C21.9097 26.8702 18.5926 28.272 14.856 28.272ZM20.904 20.68C22.632 18.952 23.496 16.84 23.496 14.344C23.496 11.848 22.632 9.73599 20.904 8.00799C19.272 6.27999 17.256 5.41599 14.856 5.41599C12.36 5.41599 10.248 6.27999 8.52001 8.00799C6.79201 9.73599 5.92801 11.848 5.92801 14.344C5.92801 16.84 6.79201 18.952 8.52001 20.68C10.248 22.408 12.36 23.272 14.856 23.272C17.256 23.272 19.272 22.408 20.904 20.68ZM21.192 36.088H8.08801V115H21.192V36.088Z"
          />
        </svg>
        <svg
          class="letter"
          width="87"
          height="93"
          viewBox="0 0 87 93"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke="white"
            stroke-width="3"
            id="letter7"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M78.4093 65.656C76.0383 71.4434 72.3685 76.2567 67.4 80.096C61.064 84.896 53.144 87.296 43.64 87.296C36.152 87.296 29.48 85.616 23.624 82.256C17.864 78.896 13.352 74.144 10.088 68C6.82399 61.856 5.19199 54.656 5.19199 46.4C5.19199 38.24 6.82399 31.136 10.088 25.088C13.352 18.944 17.864 14.192 23.624 10.832C29.48 7.47199 36.152 5.79199 43.64 5.79199C53.336 5.79199 61.304 8.144 67.544 12.848C72.5551 16.5684 76.2151 21.4297 78.524 27.432C79.1345 29.0189 79.6504 30.6856 80.072 32.432H65.96C64.616 27.632 61.976 23.84 58.04 21.056C54.2 18.272 49.4 16.88 43.64 16.88C36.152 16.88 30.104 19.472 25.496 24.656C20.888 29.744 18.584 36.992 18.584 46.4C18.584 55.904 20.888 63.248 25.496 68.432C30.104 73.616 36.152 76.208 43.64 76.208C49.4 76.208 54.2 74.864 58.04 72.176C61.88 69.488 64.52 65.648 65.96 60.656H80.072C79.6162 62.3964 79.0619 64.0631 78.4093 65.656ZM70.5384 8.84377C77.8923 14.3085 82.6693 21.8831 84.9324 31.2588L86.4225 37.432H62.1677L61.1452 33.7802C60.0993 30.0451 58.1174 27.2351 55.1527 25.1381L55.1288 25.1212L55.1052 25.104C52.2881 23.0617 48.5765 21.88 43.64 21.88C37.4522 21.88 32.8104 23.9533 29.233 27.9778L29.2176 27.9952L29.202 28.0124C25.6928 31.8872 23.584 37.7692 23.584 46.4C23.584 55.1353 25.6976 61.1328 29.233 65.1102C32.8104 69.1347 37.4522 71.208 43.64 71.208C48.6118 71.208 52.3488 70.0565 55.1727 68.0798C57.9737 66.1191 59.9962 63.2905 61.1559 59.2702L62.1984 55.656H86.5502L84.9089 61.9228C82.5294 71.0081 77.705 78.4518 70.4572 84.0524L70.4383 84.067L70.4193 84.0815C63.0541 89.6612 54.0143 92.296 43.64 92.296C35.3764 92.296 27.8293 90.4335 21.1356 86.5928L21.1201 86.5839L21.1046 86.5749C14.5056 82.7255 9.35288 77.2737 5.67241 70.3458C1.95904 63.3559 0.191986 55.3216 0.191986 46.4C0.191986 37.5721 1.96011 29.627 5.68026 22.7275C9.3602 15.8065 14.5103 10.3598 21.1046 6.5131L21.1201 6.50408L21.1356 6.49516C27.8293 2.65453 35.3764 0.791992 43.64 0.791992C54.1484 0.791992 63.2428 3.35007 70.5384 8.84377Z"
          />
        </svg>
        <svg
          class="letter"
          width="79"
          height="117"
          viewBox="0 0 79 117"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke="white"
            stroke-width="3"
            id="letter8"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M46.9059 117L23.192 90.3081V117H0.0880127V0.440002H23.192V54.6956L46.2957 28.088H78.4688L36.586 72.4059L78.5856 117H46.9059ZM29.712 72.4L66.864 33.088H48.576L18.192 68.08V5.44H5.08801V112H18.192V77.152L49.152 112H67.008L29.712 72.4Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default CustomLoader;