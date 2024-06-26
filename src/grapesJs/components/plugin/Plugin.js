// export const plugin1 = (editor, opts={}) =>{
//     const labels = {
//         block1: true,
//         block2: true,
//         block3:true,
//     }

//     const categories = {
//         category1: 'category1',
//         category2: 'category2',
//         category3: 'category3',

//     }

//     opts = { labels: labels, categories: categories };
//     loadComponents(editor, opts)
// }

// const loadComponents = (editor, options) => {
//     const { labels, categories } = options;
//     if(labels?.block1){
//         editor.BlockManager.add('block1', {
//             label: 'Simple block',
//             category: categories?.category1,
//             content: `
//             <!--
//   This example requires updating your template:

//   <html class="h-full bg-gray-100">
//   <body class="h-full">
// -->
// <div class="min-h-full">
//   <nav class="bg-gray-800">
//     <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//       <div class="flex h-16 items-center justify-between">
//         <div class="flex items-center">
//           <div class="flex-shrink-0">
//             <img class="h-8 w-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company">
//           </div>
//           <div class="hidden md:block">
//             <div class="ml-10 flex items-baseline space-x-4">
//               <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
//               <a href="#" class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Dashboard</a>

//               <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Team</a>

//               <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</a>

//               <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Calendar</a>

//               <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Reports</a>
//             </div>
//           </div>
//         </div>
//         <div class="hidden md:block">
//           <div class="ml-4 flex items-center md:ml-6">
//             <button type="button" class="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
//               <span class="sr-only">View notifications</span>
//               <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
//                 <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
//               </svg>
//             </button>

//             <!-- Profile dropdown -->
//             <div class="relative ml-3">
//               <div>
//                 <button type="button" class="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
//                   <span class="sr-only">Open user menu</span>
//                   <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
//                 </button>
//               </div>

//               <!--
//                 Dropdown menu, show/hide based on menu state.

//                 Entering: "transition ease-out duration-100"
//                   From: "transform opacity-0 scale-95"
//                   To: "transform opacity-100 scale-100"
//                 Leaving: "transition ease-in duration-75"
//                   From: "transform opacity-100 scale-100"
//                   To: "transform opacity-0 scale-95"
//               -->
//               <div class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
//                 <!-- Active: "bg-gray-100", Not Active: "" -->
//                 <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>

//                 <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>

//                 <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div class="-mr-2 flex md:hidden">
//           <!-- Mobile menu button -->
//           <button type="button" class="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" aria-controls="mobile-menu" aria-expanded="false">
//             <span class="sr-only">Open main menu</span>
//             <!-- Menu open: "hidden", Menu closed: "block" -->
//             <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
//               <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//             </svg>
//             <!-- Menu open: "block", Menu closed: "hidden" -->
//             <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
//               <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>

//     <!-- Mobile menu, show/hide based on menu state. -->
//     <div class="md:hidden" id="mobile-menu">
//       <div class="space-y-1 px-2 pt-2 pb-3 sm:px-3">
//         <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
//         <a href="#" class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>

//         <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>

//         <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>

//         <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>

//         <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Reports</a>
//       </div>
//       <div class="border-t border-gray-700 pt-4 pb-3">
//         <div class="flex items-center px-5">
//           <div class="flex-shrink-0">
//             <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
//           </div>
//           <div class="ml-3">
//             <div class="text-base font-medium leading-none text-white">Tom Cook</div>
//             <div class="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
//           </div>
//           <button type="button" class="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
//             <span class="sr-only">View notifications</span>
//             <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
//               <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
//             </svg>
//           </button>
//         </div>
//         <div class="mt-3 space-y-1 px-2">
//           <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Your Profile</a>

//           <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Settings</a>

//           <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Sign out</a>
//         </div>
//       </div>
//     </div>
//   </nav>

//   <header class="bg-white shadow">
//     <div class="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
//       <h1 class="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
//     </div>
//   </header>
//   <main>
//     <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
//       <!-- Your content -->
//     </div>
//   </main>
// </div>

//             `,
//           });
//     }
//     // if(labels?.block2){
//     //     editor.BlockManager.add('my-second-block', {
//     //         label: 'Simple block 2',
//     //         category: categories?.category2,
//     //         content: `<!DOCTYPE html>
//     //         <html lang="en">
            
//     //         <head>
//     //             <meta charset="UTF-8">
//     //             <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     //             <title>Video Popup</title>
//     //             <style>
//     //                 /* Style the popup window */
//     //                 .popup {
//     //                     display: none;
//     //                     position: fixed;
//     //                     top: 50%;
//     //                     left: 50%;
//     //                     transform: translate(-50%, -50%);
//     //                     width: 600px;
//     //                     height: 400px;
//     //                     background-color: #fff;
//     //                     border: 1px solid #ccc;
//     //                     box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
//     //                     z-index: 9999;
//     //                 }
            
//     //                 /* Style the modal */
//     //                 .modal {
//     //                     display: none;
//     //                     position: fixed;
//     //                     top: 0;
//     //                     left: 0;
//     //                     width: 100%;
//     //                     height: 100%;
//     //                     background-color: rgba(0, 0, 0, 0.5);
//     //                     z-index: 999;
//     //                 }
            
//     //                 /* Style the modal content */
//     //                 .modal-content {
//     //                     position: absolute;
//     //                     top: 50%;
//     //                     left: 50%;
//     //                     transform: translate(-50%, -50%);
//     //                     background-color: #fefefe;
//     //                     padding: 20px;
//     //                     border: 1px solid #888;
//     //                     width: 300px;
//     //                     text-align: center;
//     //                 }
            
//     //                 /* Style the close button */
//     //                 .close {
//     //                     color: #aaa;
//     //                     float: right;
//     //                     font-size: 28px;
//     //                     font-weight: bold;
//     //                 }
            
//     //                 .close:hover,
//     //                 .close:focus {
//     //                     color: black;
//     //                     text-decoration: none;
//     //                     cursor: pointer;
//     //                 }
//     //             </style>
//     //         </head>
            
//     //         <body>
            
//     //             <a href="https://www.youtube.com/embed/2qQtLwcF3Jk?si=e7A83nyCCrvzaS2K" onclick="openModal()">Open Video Popup</a>
            
//     //             <div class="popup" id="videoPopup">
//     //                 <!-- Embed the video here -->
//     //                 <iframe id="videoFrame" width="100%" height="100%" src="" frameborder="0" allowfullscreen></iframe>
//     //             </div>
            
//     //             <!-- Modal -->
//     //             <div id="myModal" class="modal">
//     //                 <!-- Modal content -->
//     //                 <div class="modal-content">
//     //                     <span class="close" onclick="closeModal()">&times;</span>
//     //                     <p>Appetizer Modal Content Goes Here</p>
//     //                 </div>
//     //             </div>
            
//     //             <script>
//     //                 function openModal() {
//     //                     document.getElementById('myModal').style.display = 'block';
//     //                 }
            
//     //                 function closeModal() {
//     //                     document.getElementById('myModal').style.display = 'none';
//     //                 }
            
//     //                 var anchorTags = document.querySelectorAll('a');
//     //                 anchorTags.forEach(function (anchorTag) {
//     //                     anchorTag.addEventListener('click', function (e) {
//     //                         e.preventDefault();
//     //                         var videoSrc = this.getAttribute('href');
//     //                         document.getElementById('videoFrame').src = videoSrc;
//     //                         document.getElementById('videoPopup').style.display = 'block';
//     //                     });
//     //                 });
//     //             </script>
            
//     //         </body>
            
//     //         </html>
//     //       `,
//     //       });
//     // }
//     if(labels?.block3){
//       editor.BlockManager.add('my-second-block', {
//           label: 'Simple block 3',
//           category: categories?.category3,
//           content: `<!DOCTYPE html>
//           <html lang="en">
          
//           <head>
//               <meta charset="UTF-8">
//               <meta name="viewport" content="width=device-width, initial-scale=1.0">
//               <title>Collapsible Items with Tabs</title>
//               <style>
//                   .popup {
//                       display: none;
//                       position: fixed;
//                       top: 50%;
//                       left: 50%;
//                       transform: translate(-50%, -50%);
//                       width: 100%;
//                       max-width: 500px;
//                       height: 100%;
//                       max-height: 200px;
//                       background-color: #fff;
//                       border: 1px solid #ccc;
//                       box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
//                       z-index: 9999;
//                       overflow: auto;
//                   }
          
//                   .popup-content {
//                       padding: 20px;
//                   }
          
//                   body {
//                       background-color: #EB4F26;
//                   }
          
//                   .tab_conatiner {
//                       display: flex;
//                       justify-content: center;
//                   }
          
//                   .tab {
//                       margin-right: 10px;
//                       border: none;
//                       text-align: center;
//                       outline: none;
//                       background-color: #EB4F26;
//                       width: 120px;
//                       font-size: 14px;
//                       padding: 9px 15px;
//                       border: 1px solid white;
//                       color: #ffffff;
//                       border-radius: 7px;
//                   }
          
//                   .active {
//                       background-color: #ffffff;
//                       color: #EB4F26;
//                       border: 1px solid #EB4F26;
//                   }
          
//                   .tabcontent {
//                       display: none;
//                       padding: 20px;
//                       border: 1px solid #ccc;
//                       margin-top: 10px;
//                   }
          
//                   .close-btn {
//                       position: absolute;
//                       top: 10px;
//                       right: 10px;
//                       cursor: pointer;
//                   }
          
//                   #videoFrame {
//                       width: 100%;
//                       height: 100%;
          
//                   }
          
//                   .text-wrapper-5 {
//                       font-weight: 500;
//                       width: 10%;
//                       border-radius: 7px;
//                       display: flex;
//                       padding: 10px;
//                       border: none;
//                   }
//                   .cofee_price{
//                       display: flex;
//                       align-items: center;
//                   }
//                   .text-wrapper-6{
//                       margin-left: 5px;
//                   }
//               </style>
//           </head>
          
//           <body>
          
//               <div class="popup" id="videoPopup">
//                   <div class="popup-content">
//                       <span class="close-btn">&times;</span>
//                       <!-- Embed the video here -->
//                       <iframe width="560" height="315"
//                           src="https://www.youtube.com/embed/bmgSvh2Esow?si=AQl2J8btTmEEfnLP&autoplay=1&mute=1"
//                           title="YouTube video player" frameborder="0"
//                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                           referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
//                       <iframe id="videoFrame" src="https://www.youtube.com/embed/0jIeCAOkgcQ?si=vHnVf5ym0Vdq3vFT" frameborder="0"
//                           allowfullscreen></iframe>
//                       <iframe id="videoFrame" width="560" height="315"
//                           src="https://www.youtube.com/embed/0jIeCAOkgcQ?si=vHnVf5ym0Vdq3vFT" title="YouTube video player"
//                           frameborder="0"
//                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                           referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
//                       <iframe id="videoFrame" width="560" height="315"
//                           src="https://youtube.com/shorts/lVWWkYEwQXY?si=c9_D1eomIFwJIqer" title="YouTube video player"
//                           frameborder="0"
//                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                           referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          
//                   </div>
//               </div>
          
//               <div class="tab_conatiner">
//                   <button class="tab" id="tab1">Signatures</button>
//                   <button class="tab" id="tab2">Quenchers</button>
//                   <button class="tab" id="tab3">Cakes</button>
//               </div>
          
//               <!-- Tab content -->
//               <div id="content1" class="tabcontent">
//                   <div class="group-4">
//                       <button class="text-wrapper-5" id="capaccino">Cappuccino</button>
//                       <div class="cofee_price">
          
//                           <p class="p">Rich shot of espresso lies in wait under a smoothed and stretched layer of thick</p>
//                           <div class="text-wrapper-6">₹190</div>
//                       </div>
//                       <div class="ellipse-wrapper">
//                           <div class="ellipse"></div>
//                       </div>
//                   </div>
//                   <div class="group-5">
//                       <div class="text-wrapper-5">Cappuccino</div>
//                       <p class="p">Rich shot of espresso lies in wait under a smoothed and stretched layer of thick</p>
//                       <div class="text-wrapper-6">₹190</div>
//                       <div class="ellipse-wrapper">
//                           <div class="ellipse"></div>
//                       </div>
//                   </div>
//                   <div class="group-6">
//                       <div class="text-wrapper-5">Cappuccino</div>
//                       <p class="p">Rich shot of espresso lies in wait under a smoothed and stretched layer of thick</p>
//                       <div class="text-wrapper-6">₹190</div>
//                       <div class="ellipse-wrapper">
//                           <div class="ellipse"></div>
//                       </div>
//                   </div>
//               </div>
          
//               <div id="content2" class="tabcontent">
//                   <h3>Quenchers</h3>
//                   <p>Maecenas ligula massa, varius a, semper congue, euismod non, mi.</p>
//                   <p>Maecenas ligula massa, varius a, semper congue, euismod non, mi.</p>
//                   <p>Maecenas ligula massa, varius a, semper congue, euismod non, mi.</p>
//               </div>
          
//               <div id="content3" class="tabcontent">
//                   <h3>Cakes</h3>
//                   <p>Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>
//                   <p>Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>
//                   <p>Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>
//               </div>
//               <script>
//                   // Get all tab buttons
//                   var tabs = document.querySelectorAll('.tab');
//                   var tabContents = document.querySelectorAll('.tabcontent');
//                   var popup = document.getElementById('videoPopup');
//                   var closeBtn = document.querySelector('.close-btn');
          
//                   tabs.forEach(function (tab, index) {
//                       tab.addEventListener('click', function () {
//                           tabContents.forEach(function (content) {
//                               content.style.display = 'none';
//                           });
//                           tabs.forEach(function (tab) {
//                               tab.classList.remove('active');
//                           });
//                           document.getElementById('content' + (index + 1)).style.display = 'block';
//                           this.classList.add('active');
//                       });
//                   });
          
//                   // Show the default tab content
//                   document.getElementById('content1').style.display = 'block';
//                   document.getElementById('tab1').classList.add('active');
          
//                   // Add event listener to close button
//                   closeBtn.addEventListener('click', function () {
//                       closePopup();
//                   });
          
//                   // Close popup function
//                   function closePopup() {
//                       document.getElementById('videoFrame').src = ''; // Reset video source
//                       popup.style.display = 'none';
//                   }
          
//                   // Open popup function
//                   function openPopup(videoSrc) {
//                       document.getElementById('videoFrame').src = videoSrc;
//                       popup.style.display = 'block';
//                   }
          
//                   // Add event listener to Cappuccino button
//                   document.getElementById('capaccino').addEventListener('click', function () {
//                       openPopup('https://www.youtube.com/embed/2qQtLwcF3Jk?si=e7A83nyCCrvzaS2K');
//                   });
//               </script>
//           </body>
          
//           </html>`,
//         });
//   }
// }