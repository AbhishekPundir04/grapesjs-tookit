export const blockManager = {
  appendTo: '#blocks',
  blocks: [
    {
      id: '1',
      label: '',
      category: 'Templates',
      attributes: { class: 'gjs-block-1', id: "gjs-1" },
      content: `<!DOCTYPE html>
      <html lang="en">
      
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Collapsible Items with Tabs</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossorigin="anonymous"></script>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Poppins' !important;
      
          }
      
          body {
            margin: 0;
            color: white;
            background-color: #FF5A2D;
      
          }
      
          .header-bg-img {
            background-image: url("https://editor-poc.s3.ap-south-1.amazonaws.com/barista.svg");
            height: 241px;
            width: 100%px;
            color: white;
            background-color: #FF5A2D;
            background-repeat: no-repeat;
            position: relative;
      
            @media (max-width: 576px) {
              background-image: url("https://editor-poc.s3.ap-south-1.amazonaws.com/barista.svg");
              height: 220px;
              width: 400px;
              color: white;
              background-color: #FF5A2D;
              background-repeat: no-repeat;
              position: relative;
            }
      
      
          }
      
          .header-parent {
            /* display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center; */
            position: relative;
            max-width: 500px;
            width: 100%;
            margin: 0 auto;
      
          }
      
          .header-parent .backImg {
            width: 100%;
          }
      
          header {
            position: absolute;
            top: 41%;
            left: 33%;
            display: flex;
            flex-direction: column;
            text-align: center;
          }
      
          .container {
            background-color: #FF5A2D;
            color: white;
            max-width: 528px;
            margin: 0 auto;
            padding: 0px !important;
          }
      
      
      
          .accordion-body {
            background-color: #FF5A2D;
            padding: 0 0 !important;
      
          }
      
          .popup {
            display: none;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            max-width: 500px;
            height: 100%;
            max-height: 200px;
            background-color: #fff;
            border: 1px solid #ccc;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            z-index: 9999;
            backdrop-filter: blur(8px);
            /* Modern browsers */
          }
      
          .tab_conatiner {
            display: flex;
            justify-content: center;
            margin: 4px 10px 0px 20px !important;
          }
      
          .tab {
            margin-right: 10px;
            border: none;
            text-align: center;
            outline: none;
            background-color: #EB4F26;
            width: 120px;
            font-size: 14px;
            padding: 9px 15px;
            border: 1px solid white;
            color: #ffffff;
            border-radius: 7px;
            cursor: pointer;
          }
      
          .active {
            background-color: #ffffff !important;
            color: #EB4F26 !important;
            border: 1px solid #EB4F26 !important;
          }
      
          .tabcontent {
            display: none;
            padding: 20px;
            margin-top: 10px;
          }
      
          .close-btn {
            font-size: 40px;
            position: absolute;
            top: 316px;
            cursor: pointer;
            left: 50%;
          }
      
          #videoFrame {
            width: 100%;
            height: 216px!important;
      
          }
      
          .text-wrapper-5 {
            font-weight: 500;
            width: 10%;
            border-radius: 7px;
            display: flex;
            padding: 10px;
            border: none;
          }
      
          .cofee_price {
            display: flex;
            align-items: center;
          }
      
          .text-wrapper-6 {
            margin-left: 5px;
          }
      
          .menu {
            background-color: #FF5A2D;
            padding: 10px;
            border-radius: 10px;
          }
      
          .menu-title {
            text-align: center;
            font-size: 1.5em;
            margin-bottom: 20px;
            border: 2px solid white;
            padding: 14px;
            border-radius: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
      
          .menu-item {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
            color: #ffffff;
            padding: 0px;
            border-radius: 10px;
      
      
          }
      
          .menu-icon {
            width: 18px;
            height: 18px;
          }
      
          .menu-details {
            flex-grow: 1;
            margin-left: 10px;
          }
      
          .menu-name {
            font-size: 19.2px;
            margin: 0;
      
            @media (max-width: 576px) {
              font-size: 16.2px;
              margin: 0;
      
            }
      
      
          }
      
          .menu-description {
            margin: 5px 0 0;
            font-size: 15px;
      
            @media (max-width: 576px) {
              margin: 5px 0px 0px;
              font-size: 12px;
            }
          }
      
          .menu-price {
            font-size: 1.2em;
            margin: 0;
            font-weight: 600;
            color: #ffffff;
          }
      
          .modal {
            display: none;
            position: fixed;
            z-index: 1;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background-color: rgb(0, 0, 0);
            background-color: rgba(0, 0, 0, 0.4);
            /* Black w/ opacity */
          }
      
          .modal-content {
            position: relative;
            background-color: #fefefe;
            margin: 50% auto;
            padding: 0px;
            border: 1px solid #888;
            width: 90%;
            max-width: 700px;
            border-radius: 5px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
          }
      
          .accordion-button:not(.collapsed) {
            background-color: #FF5A2D !important;
            border: initial;
            color: white;
          }
      
      
      
          #food-image {
            height: 39px;
            width: 44px;
            margin-right: 20px;
            border-radius: 4px;
          }
      
          #food-image2 {
            height: 39px;
            width: 44px;
            margin-right: 20px;
            border-radius: 4px;
          }
      
          #food-image3 {
            height: 39px !important;
            width: 44px !important;
            margin-right: 20px;
            border-radius: 4px;
          }
      
          #food-image4 {
            height: 39px !important;
            width: 44px !important;
            margin-right: 20px;
            border-radius: 4px;
          }
      
          #food-image5 {
            height: 39px !important;
            width: 44px !important;
            margin-right: 20px;
            border-radius: 4px;
          }
      
          .gjs-selected {
            outline: 0px !important;
      
          }
      
          .accordion-item:first-of-type {
            border-top-left-radius: 0 !important;
            border-top-right-radius: 0 !important;
          }
      
      
          .accordion-item {
            background-color: #FF5A2D !important;
            border: 0 !important;
          }
      
          .accordion-header {
            margin-bottom: 20px !important;
          }
      
          a {
            color: #ffffff !important;
            text-decoration: none !important;
          }
      
          .close-btn img {
            width: 8%;
            height: 100%;
            display: block;
          }
      
          .table>:not(caption)>*>* {
            padding: 0.5rem 0.5rem !important;
            background-color: none !important;
            border-bottom-width: 0 !important;
            box-shadow: 0 !important;
          }
      
          button.tab.active {
            background-color: #ffffff !important;
            color: #EB4F26 !important;
          }
        </style>
      </head>
      
      <body>
        <div id="videoPopup" class="modal">
          <div class="modal-content">
            <div class="close-btn" id="closeModalBtn">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Cross_icon_%28white%29.svg/2048px-Cross_icon_%28white%29.svg.png"
                alt="Close">
            </div>
            <iframe id="videoFrame" width="100%" height="400" border-radius="8px" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
        <div class="container">
          <div class="header-parent">
      
      
      
            <img class="backImg" src="https://editor-poc.s3.ap-south-1.amazonaws.com/barista.svg" alt="" />
            <header class="header">
              <h1 class="title">BARISTA</h1>
              <p class="location">Sec 38, Noida</p>
            </header>
          </div>
      
      
          <div class="tab_conatiner">
            <button class="tab" id="tab1">Signatures</button>
            <button class="tab" id="tab2">Quenchers</button>
            <button class="tab" id="tab3">Cakes</button>
          </div>
          <section id="content1" class="tabcontent">
            <div class="accordion" id="content1">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button" style="background: #FF5A2D;
                  border: none;
                  color: white; border: 1px solid white;border-radius: 12px; font-size: 25px; font-weight:400;" type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <img id="food-image" src="https://editor-poc.s3.ap-south-1.amazonaws.com/rectangle_1.svg" />
                    <div>Cappuccino</div>
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <div class="menu-item" id="capaccino">
                      <div class="table-responsive w-100">
                        <table class="table">
                          <tbody>
                            <tr>
                              <td>
                                <div class="d-flex" style=" color: white;"><img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Cn-ernuODto9ZXuSSPxnK9KRdyUn4N0LtA&usqp=CAU"
                                    alt="Cappuccino" class="menu-icon">
                                  <div class="menu-details">
                                    <h3 class="menu-name">Cold Brew Coffee
                                    </h3>
                                    <p class="menu-description">Smooth and bold, our cold brew
      
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <p class="menu-price">$200</p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div class="d-flex" style=" color: white;"><img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Cn-ernuODto9ZXuSSPxnK9KRdyUn4N0LtA&usqp=CAU"
                                    alt="Cappuccino" class="menu-icon">
                                  <div class="menu-details">
                                    <h3 class="menu-name">Cold Brew Coffee
                                    </h3>
                                    <p class="menu-description">Smooth and bold, our cold brew
      
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <p class="menu-price">$200</p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div class="d-flex" style=" color: white;"><img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Cn-ernuODto9ZXuSSPxnK9KRdyUn4N0LtA&usqp=CAU"
                                    alt="Cappuccino" class="menu-icon">
                                  <div class="menu-details">
                                    <h3 class="menu-name">Cold Brew Coffee
                                    </h3>
                                    <p class="menu-description">Smooth and bold, our cold brew
      
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <p class="menu-price">$200</p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
      
      
                  </div>
                </div>
      
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button style="background: #FF5A2D;
                  border: none;
                  color: white; border: 1px solid white;border-radius: 12px; font-size: 25px; font-weight:400 "
                      class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                      aria-expanded="false" aria-controls="collapseTwo">
                      <img id="food-image2"
                        src="data:image/jpeg;base64,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" />
                      <div class="capaccino">Laate</div>
      
                    </button>
                  </h2>
                  <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <div class="menu-item">
                        <div class="table-responsive w-100">
                          <table class="table">
                            <tbody>
                              <tr>
                                <td>
                                  <div class="d-flex" style=" color: white;"><img
                                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Cn-ernuODto9ZXuSSPxnK9KRdyUn4N0LtA&usqp=CAU"
                                      alt="Cappuccino" class="menu-icon">
                                    <div class="menu-details">
                                      <h3 class="menu-name">Cold Brew Coffee
                                      </h3>
                                      <p class="menu-description">Smooth and bold, our cold brew
      
                                      </p>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <p class="menu-price">$200</p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="d-flex" style=" color: white;"><img
                                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Cn-ernuODto9ZXuSSPxnK9KRdyUn4N0LtA&usqp=CAU"
                                      alt="Cappuccino" class="menu-icon">
                                    <div class="menu-details">
                                      <h3 class="menu-name">Cold Brew Coffee
                                      </h3>
                                      <p class="menu-description">Smooth and bold, our cold brew
      
                                      </p>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <p class="menu-price">$200</p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="d-flex" style=" color: white;"><img
                                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Cn-ernuODto9ZXuSSPxnK9KRdyUn4N0LtA&usqp=CAU"
                                      alt="Cappuccino" class="menu-icon">
                                    <div class="menu-details">
                                      <h3 class="menu-name">Cold Brew Coffee
                                      </h3>
                                      <p class="menu-description">Smooth and bold, our cold brew
      
                                      </p>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <p class="menu-price">$200</p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button style="background: #FF5A2D;
                    border: none;
                    color: white; border: 1px solid white;border-radius: 12px; font-size: 25px; font-weight:400;"
                      class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      <img id="food-image3"
                        src="data:image/jpeg;base64,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" />
                      <div>Foods</div>
                    </button>
                  </h2>
                  <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
      
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button style="background: #FF5A2D;
                    border: none;
                    color: white; border: 1px solid white;border-radius: 12px; font-size: 25px; font-weight:400;"
                      class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      <img id="food-image4"
      src="data:image/jpeg;base64,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"/>
                      <div>Cold Coffee</div>
                    </button>
                  </h2>
                  <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                    </div>
                  </div>
                </div>
              </div>
      
          </section>
          <section id="content2" class="tabcontent">
            <div class="accordion" id="content2">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button class="accordion-button" style="background: #FF5A2D;
                  border: none;
                  color: white; border: 1px solid white;border-radius: 12px; font-size: 25px; font-weight:400;" type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <img id="food-image5" src="https://editor-poc.s3.ap-south-1.amazonaws.com/rectangle_1.svg" />
                    <div>Quenchers</div>
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <div class="menu-item" id="capaccino">
                      <div class="menu-item" id="capaccino">
                        <div class="table-responsive w-100">
                          <table class="table">
                            <tbody>
                              <tr>
                                <td>
                                  <div class="d-flex" style=" color: white;"><img
                                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Cn-ernuODto9ZXuSSPxnK9KRdyUn4N0LtA&usqp=CAU"
                                      alt="Cappuccino" class="menu-icon">
                                    <div class="menu-details">
                                      <h3 class="menu-name">Cold Brew Coffee
                                      </h3>
                                      <p class="menu-description">Smooth and bold, our cold brew
      
                                      </p>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <p class="menu-price">$200</p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="d-flex" style=" color: white;"><img
                                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Cn-ernuODto9ZXuSSPxnK9KRdyUn4N0LtA&usqp=CAU"
                                      alt="Cappuccino" class="menu-icon">
                                    <div class="menu-details">
                                      <h3 class="menu-name">Cold Brew Coffee
                                      </h3>
                                      <p class="menu-description">Smooth and bold, our cold brew
      
                                      </p>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <p class="menu-price">$200</p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="d-flex" style=" color: white;"><img
                                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Cn-ernuODto9ZXuSSPxnK9KRdyUn4N0LtA&usqp=CAU"
                                      alt="Cappuccino" class="menu-icon">
                                    <div class="menu-details">
                                      <h3 class="menu-name">Cold Brew Coffee
                                      </h3>
                                      <p class="menu-description">Smooth and bold, our cold brew
      
                                      </p>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <p class="menu-price">$200</p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </section>
        </div>
      
        <script>
          var tabs = document.querySelectorAll('.tab');
          var tabContents = document.querySelectorAll('.tabcontent');
          var popup = document.getElementById('videoPopup');
          var closeBtn = document.querySelector('.close-btn');
      
          tabs.forEach(function (tab, index) {
            tab.addEventListener('click', function () {
              tabContents.forEach(function (content) {
                content.style.display = 'none';
              });
              tabs.forEach(function (tab) {
                tab.classList.remove('active');
              });
              document.getElementById('content' + (index + 1)).style.display = 'block';
              this.classList?.add('active');
            });
          });
      
          document.getElementById('content1').style.display = 'block';
          document.getElementById('tab1').classList.add('active');
      
          closeBtn.addEventListener('click', function () {
            closePopup();
          });
      
      
          function closePopup() {
            document.getElementById('videoFrame').src = '';
            popup.style.display = 'none';
          }
      
          function openPopup(videoSrc) {
            document.getElementById('videoFrame').src = videoSrc;
            popup.style.display = 'block';
          }
      
          var anchorTags = document.querySelectorAll('a');
          anchorTags.forEach(function (anchorTag) {
            anchorTag.addEventListener('click', function (e) {
              e.preventDefault();
              var videoSrc = this.getAttribute('href');
              document.getElementById('videoFrame').src = videoSrc + "&autoplay=1";
              document.getElementById('videoPopup').style.display = 'block';
            });
          });
      
      
      
        </script>
      </body>
      
      </html>`,
    },
    {
      id: '2',
      label: '',
      category: 'Templates',
      attributes: { class: 'gjs-block-2' },
      content: `<!DOCTYPE html>
      <html lang="en">
      
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Collapsible Items with Tabs</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossorigin="anonymous"></script>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
      
          body {
            margin: 0;
            color: white;
            background-color: #FF5A2D;
            font-family: 'Poppins', sans-serif !important;
      
      
          }
      
          .header-bg-img {
            background-image: url("https://editor-poc.s3.ap-south-1.amazonaws.com/barista.svg");
            height: 241px;
            width: 100%px;
            color: white;
            background-color: #FF5A2D;
            background-repeat: no-repeat;
            position: relative;
      
            @media (max-width: 576px) {
              background-image: url("https://editor-poc.s3.ap-south-1.amazonaws.com/barista.svg");
              height: 220px;
              width: 400px;
              color: white;
              background-color: #FF5A2D;
              background-repeat: no-repeat;
              position: relative;
            }
      
      
          }
      
          .header-parent {
            /* display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center; */
            position: relative;
            max-width: 500px;
            width: 100%;
            margin: 0 auto;
      
          }
      
          .header-parent .backImg {
            width: 100%;
          }
      
          header {
            position: absolute;
            top: 41%;
            left: 33%;
          }
      
          .container {
            background-color: #FF5A2D;
            color: white;
            max-width: 528px;
            margin: 0 auto;
            padding: 20px;
          }
      
      
      
          .accordion-body {
            background-color: #FF5A2D;
            padding: 0.1rem 0.1rem;
      
          }
      
          .popup {
            display: none;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            max-width: 500px;
            height: 100%;
            max-height: 200px;
            background-color: #fff;
            border: 1px solid #ccc;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            z-index: 9999;
            backdrop-filter: blur(8px);
              }
      
          .tab_conatiner {
            display: flex;
            justify-content: center;
          }
      
          .tab {
            margin-right: 10px;
            border: none;
            text-align: center;
            outline: none;
            background-color: #EB4F26;
            width: 120px;
            font-size: 14px;
            padding: 9px 15px;
            border: 1px solid white;
            color: #ffffff;
            border-radius: 7px;
            cursor: pointer;
          }
      
          .active {
            background-color: #ffffff !important;
            color: #EB4F26 !important;
            border: 1px solid #EB4F26 !important;
          }
      
          .tabcontent {
            display: none;
            padding: 20px;
            margin-top: 10px;
          }
      
          .close-btn {
            font-size: 40px;
            position: absolute;
            top: 316px;
            cursor: pointer;
            left: 50%;
          }
      
          #videoFrame {
            width: 100%;
            height: 100%;
      
          }
      
          .text-wrapper-5 {
            font-weight: 500;
            width: 10%;
            border-radius: 7px;
            display: flex;
            padding: 10px;
            border: none;
          }
      
          .cofee_price {
            display: flex;
            align-items: center;
          }
      
          .text-wrapper-6 {
            margin-left: 5px;
          }
      
          .menu {
            background-color: #FF5A2D;
            padding: 10px;
            border-radius: 10px;
          }
      
          .menu-title {
            text-align: center;
            font-size: 1.5em;
            margin-bottom: 20px;
            border: 2px solid white;
            padding: 14px;
            border-radius: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
      
          .menu-item {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
            color: #ffffff;
            padding: 10px;
            border-radius: 10px;
      
            @media (max-width: 576px) {
              display: flex;
              justify-content: space-between;
              margin-bottom: 20px;
              color: #ffffff;
              border-radius: 10px;
            }
      
          }
      
          .menu-icon {
            width: 18px;
            height: 18px;
          }
      
          .menu-details {
            flex-grow: 1;
            margin-left: 10px;
          }
      
          .menu-name {
            font-size: 19.2px;
            margin: 0;
      
            @media (max-width: 576px) {
              font-size: 16.2px;
              margin: 0;
      
            }
      
      
          }
      
          .menu-description {
            margin: 5px 0 0;
            font-size: 15px;
      
            @media (max-width: 576px) {
              margin: 5px 0px 0px;
              font-size: 12px;
            }
          }
      
          .menu-price {
            font-size: 1.2em;
            margin: 0;
            font-weight: 600;
            color: #ffffff;
          }
      
      
      
          .accordion-button:not(.collapsed) {
            background-color: #FF5A2D !important;
            border: initial;
            color: white;
          }
      
          .accordion-body {
            background-color: #FF5A2D;
            padding: 0rem 1.25rem !important;
      
          }
      
      
          #food-image {
            height: 39px;
            width: 44px;
            margin-right: 20px;
            border-radius: 4px;
          }
      
          #food-image2 {
            height: 39px;
            width: 44px;
            margin-right: 20px;
            border-radius: 4px;
          }
      
          #food-image3 {
            height: 39px !important;
            width: 44px !important;
            margin-right: 20px;
            border-radius: 4px;
          }
      
          #food-image4 {
            height: 39px !important;
            width: 44px !important;
            margin-right: 20px;
            border-radius: 4px;
          }
      
          #food-image5 {
            height: 39px !important;
            width: 44px !important;
            margin-right: 20px;
            border-radius: 4px;
          }
      
          .gjs-selected {
            outline: 0px !important;
      
          }
      
          .accordion-item:first-of-type {
            border-top-left-radius: 0 !important;
            border-top-right-radius: 0 !important;
          }
      
      
          .accordion-item {
            background-color: #FF5A2D !important;
            border: 0 !important;
          }
      
          .accordion-header {
            margin-bottom: 20px !important;
          }
      
          a {
            color: #ffffff !important;
            text-decoration: none !important;
          }
      
          .close-btn img {
            width: 8%;
            height: 100%;
            display: block;
          }
      
          .table>:not(caption)>*>* {
            padding: 0.5rem 0.5rem !important;
            background-color: none !important;
            border-bottom-width: 0 !important;
            box-shadow: 0 !important;
          }
        </style>
      </head>
      
      <body>
      <!-- Button trigger modal -->
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>
      
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <iframe id="videoFrame" width="100%" height="100%"
              src="https://www.youtube.com/embed/0jIeCAOkgcQ?si=vHnVf5ym0Vdq3vFT" frameborder="0" allowfullscreen></iframe>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
        <div class="popup" id="videoPopup">
          <div class="popup-content">
            <div class="close-btn">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Cross_icon_%28white%29.svg/2048px-Cross_icon_%28white%29.svg.png"
                alt="Close">
            </div>
            <!-- Embed the video here -->
      
            <iframe id="videoFrame" width="100%" height="100%"
              src="https://www.youtube.com/embed/0jIeCAOkgcQ?si=vHnVf5ym0Vdq3vFT" frameborder="0" allowfullscreen></iframe>
      
          </div>
        </div>
        <div class="container">
          <div class="header-parent">
      
      
      
            <img class="backImg" src="https://editor-poc.s3.ap-south-1.amazonaws.com/barista.svg" alt="" />
            <header class="header">
              <h1 class="title">BARISTA</h1>
              <p class="location">Sec 38, Noida</p>
            </header>
          </div>
      
      
          <div class="tab_conatiner">
            <button class="tab" id="tab1">Signatures</button>
            <button class="tab" id="tab2">Quenchers</button>
            <button class="tab" id="tab3">Cakes</button>
          </div>
          <section id="content1" class="tabcontent">
            <div class="accordion" id="content1">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button" style="background: #FF5A2D;
                  border: none;
                  color: white; border: 1px solid white;border-radius: 12px; font-size: 25px; font-weight:400;" type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <img id="food-image" src="https://editor-poc.s3.ap-south-1.amazonaws.com/rectangle_1.svg" />
                    <div>Cappuccino</div>
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <div class="menu-item" id="capaccino">
                      <div class="table-responsive w-100">
                        <table class="table">
                          <tbody>
                            <tr>
                              <td>
                                <div class="d-flex" style=" color: white;"><img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Cn-ernuODto9ZXuSSPxnK9KRdyUn4N0LtA&usqp=CAU"
                                    alt="Cappuccino" class="menu-icon">
                                  <div class="menu-details">
                                 <a>   <h3 class="menu-name">Cold Brew Coffee</a>
                                    </h3>
                                    <p class="menu-description">Smooth and bold, our cold brew
      
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <p class="menu-price">$200</p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div class="d-flex" style=" color: white;"><img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Cn-ernuODto9ZXuSSPxnK9KRdyUn4N0LtA&usqp=CAU"
                                    alt="Cappuccino" class="menu-icon">
                                  <div class="menu-details">
                                    <h3 class="menu-name">Cold Brew Coffee
                                    </h3>
                                    <p class="menu-description">Smooth and bold, our cold brew
      
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <p class="menu-price">$200</p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div class="d-flex" style=" color: white;"><img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Cn-ernuODto9ZXuSSPxnK9KRdyUn4N0LtA&usqp=CAU"
                                    alt="Cappuccino" class="menu-icon">
                                  <div class="menu-details">
                                    <h3 class="menu-name">Cold Brew Coffee
                                    </h3>
                                    <p class="menu-description">Smooth and bold, our cold brew
      
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <p class="menu-price">$200</p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
      
      
                  </div>
                </div>
      
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button style="background: #FF5A2D;
                  border: none;
                  color: white; border: 1px solid white;border-radius: 12px; font-size: 25px; font-weight:400 "
                      class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                      aria-expanded="false" aria-controls="collapseTwo">
                      <img id="food-image2"
                        src="data:image/jpeg;base64,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" />
                      <div class="capaccino">Laate</div>
      
                    </button>
                  </h2>
                  <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <div class="menu-item">
                        <div class="table-responsive w-100">
                          <table class="table">
                            <tbody>
                              <tr>
                                <td>
                                  <div class="d-flex" style=" color: white;"><img
                                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Cn-ernuODto9ZXuSSPxnK9KRdyUn4N0LtA&usqp=CAU"
                                      alt="Cappuccino" class="menu-icon">
                                    <div class="menu-details">
                                      <h3 class="menu-name">Cold Brew Coffee
                                      </h3>
                                      <p class="menu-description">Smooth and bold, our cold brew
      
                                      </p>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <p class="menu-price">$200</p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="d-flex" style=" color: white;"><img
                                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Cn-ernuODto9ZXuSSPxnK9KRdyUn4N0LtA&usqp=CAU"
                                      alt="Cappuccino" class="menu-icon">
                                    <div class="menu-details">
                                      <h3 class="menu-name">Cold Brew Coffee
                                      </h3>
                                      <p class="menu-description">Smooth and bold, our cold brew
      
                                      </p>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <p class="menu-price">$200</p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="d-flex" style=" color: white;"><img
                                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Cn-ernuODto9ZXuSSPxnK9KRdyUn4N0LtA&usqp=CAU"
                                      alt="Cappuccino" class="menu-icon">
                                    <div class="menu-details">
                                      <h3 class="menu-name">Cold Brew Coffee
                                      </h3>
                                      <p class="menu-description">Smooth and bold, our cold brew
      
                                      </p>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <p class="menu-price">$200</p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button style="background: #FF5A2D;
                    border: none;
                    color: white; border: 1px solid white;border-radius: 12px; font-size: 25px; font-weight:400;"
                      class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      <img id="food-image3"
                        src="data:image/jpeg;base64,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" />
      
                      <div>Cold Coffee</div>
                    </button>
                  </h2>
                  <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
      
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button style="background: #FF5A2D;
                    border: none;
                    color: white; border: 1px solid white;border-radius: 12px; font-size: 25px; font-weight:400;"
                      class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      <img id="food-image4"
                        src="data:image/jpeg;base64,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" />
      
                      <div>Cold Coffee</div>
                    </button>
                  </h2>
                  <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                    </div>
                  </div>
                </div>
              </div>
      
          </section>
          <section id="content2" class="tabcontent">
            <div class="accordion" id="content2">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button class="accordion-button" style="background: #FF5A2D;
                  border: none;
                  color: white; border: 1px solid white;border-radius: 12px; font-size: 25px; font-weight:400;" type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <img id="food-image5" src="https://editor-poc.s3.ap-south-1.amazonaws.com/rectangle_1.svg" />
                    <div>Quenchers</div>
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <div class="menu-item" id="capaccino">
                      <div class="menu-item" id="capaccino">
                        <div class="table-responsive w-100">
                          <table class="table">
                            <tbody>
                              <tr>
                                <td>
                                  <div class="d-flex" style=" color: white;"><img
                                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Cn-ernuODto9ZXuSSPxnK9KRdyUn4N0LtA&usqp=CAU"
                                      alt="Cappuccino" class="menu-icon">
                                    <div class="menu-details">
                                      <h3 class="menu-name">Cold Brew Coffee
                                      </h3>
                                      <p class="menu-description">Smooth and bold, our cold brew
      
                                      </p>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <p class="menu-price">$200</p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="d-flex" style=" color: white;"><img
                                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Cn-ernuODto9ZXuSSPxnK9KRdyUn4N0LtA&usqp=CAU"
                                      alt="Cappuccino" class="menu-icon">
                                    <div class="menu-details">
                                      <h3 class="menu-name">Cold Brew Coffee
                                      </h3>
                                      <p class="menu-description">Smooth and bold, our cold brew
      
                                      </p>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <p class="menu-price">$200</p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="d-flex" style=" color: white;"><img
                                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Cn-ernuODto9ZXuSSPxnK9KRdyUn4N0LtA&usqp=CAU"
                                      alt="Cappuccino" class="menu-icon">
                                    <div class="menu-details">
                                      <h3 class="menu-name">Cold Brew Coffee
                                      </h3>
                                      <p class="menu-description">Smooth and bold, our cold brew
      
                                      </p>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <p class="menu-price">$200</p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
      
              </div>
      
      
          </section>
      
      
        </div>
      
        <script>
          var tabs = document.querySelectorAll('.tab');
          var tabContents = document.querySelectorAll('.tabcontent');
          var popup = document.getElementById('videoPopup');
          var closeBtn = document.querySelector('.close-btn');
      
          tabs.forEach(function (tab, index) {
            tab.addEventListener('click', function () {
              tabContents.forEach(function (content) {
                content.style.display = 'none';
              });
              tabs.forEach(function (tab) {
                tab.classList.remove('active');
              });
              document.getElementById('content' + (index + 1)).style.display = 'block';
              this.classList?.add('active');
            });
          });
      
          document.getElementById('content1').style.display = 'block';
          document.getElementById('tab1').classList.add('active');
      
          closeBtn.addEventListener('click', function () {
            closePopup();
          });
      
      
          function closePopup() {
            document.getElementById('videoFrame').src = '';
            popup.style.display = 'none';
          }
      
          function openPopup(videoSrc) {
            document.getElementById('videoFrame').src = videoSrc;
            popup.style.display = 'block';
          }
      
          var anchorTags = document.querySelectorAll('a');
          anchorTags.forEach(function (anchorTag) {
            anchorTag.addEventListener('click', function (e) {
              e.preventDefault();
              var videoSrc = this.getAttribute('href');
              document.getElementById('videoFrame').src = videoSrc + "&autoplay=1";
              document.getElementById('videoPopup').style.display = 'block';
            });
          });
        </script>
      </body>
      
      </html>`,
    },
    //Basic cateogry
    // {
    //   id: 'section', // Block ID
    //   label: '<b>Section</b>', // Block label
    //   category: 'Basic',
    //   content: `<section>
    //                 <h1>This is a simple title</h1>
    //                 <p>This is just a Lorem text: Lorem ipsum dolor sit amet</p>
    //               </section>`,
    // },
    {
      id: 'text',
      // label: 'Text',
      category: 'Basic',
      attributes: { class: 'text' },
      content: '<div data-gjs-type="text">Insert your text here</div>',
    },
    {
      id: 'image',
      // label: 'Image',
      category: 'Basic',
      attributes: { class: 'image' },
      content: { type: 'image', activeOnRender: 1 },
    },
    // {
    //   id: 'heading',
    //   label: 'Heading',
    //   content: '<h2 class="heading-block">Heading Text</h2>',
    //   category: 'Basic',
    //   icon: '<i class="fa fa-header"></i>'
    // },
    // {
    //   id: 'list',
    //   label: 'List',
    //   content: '<ul class="list-block"><li>List Item 1</li><li>List Item 2</li></ul>',
    //   category: 'Basic',
    //   icon: '<i class="fa fa-list-ul"></i>'
    // },
    // {
    //   id: 'paragraph',
    //   label: 'Paragraph',
    //   content: '<p class="paragraph-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>',
    //   category: 'Basic',
    //   icon: '<i class="fa fa-paragraph"></i>'
    // },
    {
      id: 'link',
      // label: `Link`,
      category: 'Basic',
      attributes: { class: 'link-img' },
      content: '<a href="">This is a link</a>',
    },
    // {
    //   id: 'button',
    //   label: 'Button',
    //   category: 'Basic',
    //   content: '<button class="btn">Click me</button>',
    // },
    //Layout Category
    {
      id: 'column2',
      label: 'Column-2',
      category: 'Layout',
      attributes: { class: "column-2" },
      content: `
      <style>
        .row {
          display: flex;
          margin: 0;
        }
    
        .col {
          flex: 1;
          padding: 10px;
          box-sizing: border-box;
          min-height: 50px;
          border: 1px solid #000;
        }
    
        .parent-div {
          padding: 10px;
          border: 1px solid #000;
          width: 100%;
          box-sizing: border-box;
        }
      </style>
      <div class="parent-div">
        <div class="row">
          <div class="col">Column 1</div>
          <div class="col">Column 2</div>
        </div>
      </div>
      `,
    },
    {
      id: 'column3',
      label: 'Column-3',
      category: 'Layout',
      attributes: { class: "column-3" },
      content: `
      <style>
        .row {
          display: flex;
          margin: 0;
        }
    
        .col {
          flex: 1;
          padding: 10px;
          box-sizing: border-box;
          min-height: 50px;
          border: 1px solid #000;
        }
    
        .parent-div {
          padding: 10px;
          border: 1px solid #000;
          width: 100%;
          box-sizing: border-box;
        }
      </style>
      <div class="parent-div">
        <div class="row">
          <div class="col">Column 1</div>
          <div class="col">Column 2</div>
          <div class="col">Column 3</div>
        </div>
      </div>
      `,
    },

    //Media category
    {
      id: 'video',
      label: 'Video',
      category: 'Media',
      content: `<video controls>
                    <source src="video.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                  </video>`,
    },
    //Form Category
    {
      id: 'form',
      label: 'Form',
      category: 'Forms',
      content: `<form>
                    <div class="form-group">
                      <label for="email">Email address</label>
                      <input type="email" class="form-control" id="email" placeholder="Enter email">
                    </div>
                    <div class="form-group">
                      <label for="password">Password</label>
                      <input type="password" class="form-control" id="password" placeholder="Password">
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                  </form>`,
    },
    {
      id: 'input',
      label: 'Input',
      category: 'Forms',
      content: '<input class="form-control" placeholder="Input"/>',
    },
    {
      id: 'textarea',
      label: 'Textarea',
      category: 'Forms',
      content: '<textarea class="form-control" placeholder="Textarea"></textarea>',
    },
    {
      id: 'header',
      label: 'Header',
      category: 'Typography',
      content: '<h1>Header</h1>',
    },
    {
      id: 'paragraph',
      label: 'Paragraph',
      category: 'Typography',
      content: '<p>This is a paragraph</p>',
    },
    {
      id: 'quote',
      label: 'Quote',
      category: 'Typography',
      content: '<blockquote>This is a quote</blockquote>',
    },
    {
      id: 'list',
      label: 'List',
      category: 'Typography',
      content: `<ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                  </ul>`,
    },
    //Component Category
    {
      id: 'card',
      label: 'Card',
      category: 'Components',
      content: `<div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="..." alt="Card image cap">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>`,
    },
    {
      id: 'navbar',
      label: 'Navbar',
      category: 'Components',
      content: `<nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                      <ul class="navbar-nav">
                        <li class="nav-item active">
                          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">Features</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">Pricing</a>
                        </li>
                      </ul>
                    </div>
                  </nav>`,
    },
    {
      id: 'footer',
      label: 'Footer',
      category: 'Components',
      content: `<footer class="footer">
                    <div class="container">
                      <span class="text-muted">Place sticky footer content here.</span>
                    </div>
                  </footer>`,
    },
  ],
  categories: [
    {
      id: 'templates',
      label: 'Templates',
      open: false, // Open category by default
    },
    {
      id: 'basic',
      label: 'Basic',
      open: false,
    },
    {
      id: 'typography',
      label: 'Typography',
      open: false,
    },
    {
      id: 'components',
      label: 'Components',
      open: false,
    },
    {
      id: 'forms',
      label: 'Forms',
      open: false,
    },
    {
      id: 'media',
      label: 'Media',
      open: false,
    },
  ]
}