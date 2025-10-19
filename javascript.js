let data = [
  {
    "id": 0,
    "name": "肥宅心碎賞櫻3日",
    "imgUrl":
      "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
    "area": "高雄",
    "description": "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
    "group": 87,
    "price": 1400,
    "rate": 10
  },
  {
    "id": 1,
    "name": "貓空纜車雙程票",
    "imgUrl":
      "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    "area": "台北",
    "description":
      "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
    "group": 99,
    "price": 240,
    "rate": 2
  },
  {
    "id": 2,
    "name": "台中谷關溫泉會1日",
    "imgUrl":
      "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    "area": "台中",
    "description":
      "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
    "group": 20,
    "price": 1765,
    "rate": 7
  }
];

let areas = ["台北", "台中", "高雄"];

let newData = {
  "id": data.length,
  "name": false,
  "imgUrl": false,
  "area": false,
  "description": false,
  "group": false,
  "price": false,
  "rate": false
};

function inputData(key, value) {
  newData[key] = value;
}

//[使用者行為]新增套票資料功能
function addData() {
  if (Object.values(newData).every(value => value)) {
    data.push(newData);
    alert("新增套票資料成功");
    newData = {
      "id": data.length,
      "name": "",
      "imgUrl": "",
      "area": "",
      "description": "",
      "group": 0,
      "price": 0,
      "rate": 0
    };

    const form = document.querySelector(".addTicket-form");
    if (form) {
      form.reset();
    }
    // 重置搜尋選項為全部地區
    document.querySelector(".regionSearch").value = "";
    ticketCard("");
  } else {
    alert("請輸入完所有套票資料再送出");
  }
}

//本次搜尋共 ? 筆資料
let searchResult;

let ticketCards = document.querySelector(".ticketCard-area");
//[網頁渲染行為]上頁新增旅遊套票時，所有可選的景點地區
function renderTicketRegion() {
  let ticketRegion = document.querySelector("#ticketRegion");
  let str = ` <option
                value=''
                disabled
                selected
                hidden>
                請選擇景點地區
              </option>`;
  let content;
  //
  areas.forEach(area => {
    content = `<option value=${area}>${area}</option>`;
    str += content;
  });
  ticketRegion.innerHTML = str;
}

//[網頁渲染行為]搜尋下頁的行程小卡
function renderTicketCard(area) {
  searchResult = 0;

  let str = "";
  let content;

  data.forEach(data => {
    if (area === data.area || area === "") {
      searchResult++;
      content = ` <li class="ticketCard">
          <div class="ticketCard-img">
            <a href="#">
              <img
                src=${data.imgUrl}
                alt="" />
            </a>
            <div class="ticketCard-region">${data.area}</div>
            <div class="ticketCard-rank">${data.rate}</div>
          </div>
          <div class="ticketCard-content">
            <div>
              <h3>
                <a
                  href="#"
                  class="ticketCard-name"
                >${data.name}</a
                >
              </h3>
              <p class="ticketCard-description">
               ${data.description}
              </p>
            </div>
            <div class="ticketCard-info">
              <p class="ticketCard-num">
                <span><i class="fas fa-exclamation-circle"></i></span>
                剩下最後 <span id="ticketCard-num"> ${data.group} </span> 組
              </p>
              <p class="ticketCard-price">
                TWD <span id="ticketCard-price">${data.price}</span>
              </p>
            </div>
          </div>
        </li>`;
    } else {
      content = "";
    }

    str += content;
  });

  ticketCards.innerHTML = str;
  document.querySelector(
    "#searchResult-text"
  ).textContent = `本次搜尋共 ${searchResult} 筆資料`;
}

//[網頁渲染行為]下頁預設渲染所有行程
function initTicketCardArea() {
  let str = "";
  let content;

  data.forEach(data => {
    content = ` <li class="ticketCard">
          <div class="ticketCard-img">
            <a href="#">
              <img
                src=${data.imgUrl}
                alt="" />
            </a>
            <div class="ticketCard-region">${data.area}</div>
            <div class="ticketCard-rank">${data.rate}</div>
          </div>
          <div class="ticketCard-content">
            <div>
              <h3>
                <a
                  href="#"
                  class="ticketCard-name"
                >${data.name}</a
                >
              </h3>
              <p class="ticketCard-description">
               ${data.description}
              </p>
            </div>
            <div class="ticketCard-info">
              <p class="ticketCard-num">
                <span><i class="fas fa-exclamation-circle"></i></span>
                剩下最後 <span id="ticketCard-num"> ${data.group} </span> 組
              </p>
              <p class="ticketCard-price">
                TWD <span id="ticketCard-price">${data.price}</span>
              </p>
            </div>
          </div>
        </li>`;
    str += content;
  });

  ticketCards.innerHTML = str;
  document.querySelector(
    "#searchResult-text"
  ).textContent = `本次搜尋共 ${data.length} 筆資料`;
}

//[事件監聽器]上頁使用者新增套票
document.querySelector(".addTicket-btn").addEventListener("click", function () {
  addData();
});

//[事件監聽器]下頁搜尋地區
document.querySelector(".regionSearch").addEventListener("change", function () {
  renderTicketCard(this.value);
});

initTicketCardArea();
renderTicketRegion();

//https://rpg.hexschool.com/#/training/12062817613357131945/board/content/12062817613357131946_12062817613357131967
//待修正：上頁的  input，不要用 onInput，改為 addEventListener
