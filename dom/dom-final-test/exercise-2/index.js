/*
Напишіть код, який створює таби - перемикаючі панелі. Приклад можно подивитися тут - https://codepen.io/deniscreative/pen/rwPrKw
З прикладу можна взяти HTML-розмітку та CSS.
Вам треба зробити лише горизонтальні таби, вертикальні не треба.
Створіть масив з необхідними даними та відмалюйте розмітку та логіку за допомогою JS.
*/
document.body.insertAdjacentHTML("beforeend", 
    `<div class="tabs">
        <ul class="tabs__caption">
          <li class="active">Первая вкладка</li>
          <li>Вторая вкладка</li>
          <li>Третья вкладка</li>
          <li>Четвертая вкладка</li>
        </ul>
        <div class="tabs__content  active">
          <p>Локаята принимает во внимание онтологический закон исключённого третьего, открывая новые горизонты. Идеи гедонизма занимают центральное место в утилитаризме Милля и Бентама, однако гегельянство поразительно. Отношение к современности амбивалентно
            творит интеллект, изменяя привычную реальность.</p>
          <p>Апостериори, созерцание понимает под собой позитивизм, однако Зигварт считал критерием истинности необходимость и общезначимость, для которых нет никакой опоры в объективном мире. Закон исключённого третьего, следовательно, абстрактен. Катарсис рефлектирует
            трагический знак, открывая новые горизонты.</p>
        </div>
      
        <div class="tabs__content">
          <p>Закон внешнего мира, как принято считать, реально рассматривается знак, отрицая очевидное. Гегельянство творит катарсис, хотя в официозе принято обратное. Апперцепция подчеркивает смысл жизни, ломая рамки привычных представлений. Представляется логичным,
            что адживика откровенна.</p>
          <p>Априори, закон внешнего мира принимает во внимание естественный гедонизм, ломая рамки привычных представлений. Концепция реально творит гедонизм, учитывая опасность, которую представляли собой писания Дюринга для не окрепшего еще немецкого рабочего
            движения.</p>
          <p>Созерцание осмысляет трансцендентальный бабувизм, хотя в официозе принято обратное. Бабувизм абстрактен. Знак, следовательно, понимает под собой субъективный язык образов, ломая рамки привычных представлений. Деонтология непредвзято подчеркивает даосизм,
            при этом буквы А, В, I, О символизируют соответственно общеутвердительное, общеотрицательное, частноутвердительное и частноотрицательное суждения.</p>
        </div>
      
        <div class="tabs__content">
          <p>Структурализм, как следует из вышесказанного, заполняет из ряда вон выходящий дуализм, однако Зигварт считал критерием истинности необходимость и общезначимость, для которых нет никакой опоры в объективном мире. Суждение осмысляет интеллект, однако
            Зигварт считал критерием истинности необходимость и общезначимость, для которых нет никакой опоры в объективном мире.</p>
          <p>Сомнение, по определению, непредвзято заполняет знак, изменяя привычную реальность. Современная ситуация, следовательно, подрывает трагический смысл жизни, однако Зигварт считал критерием истинности необходимость и общезначимость, для которых нет
            никакой опоры в объективном мире. Гносеология категорически порождает и обеспечивает непредвиденный смысл жизни, отрицая очевидное.</p>
        </div>
      
        <div class="tabs__content">
          <p>Деонтология создает примитивный даосизм, открывая новые горизонты. Даосизм, как принято считать, амбивалентно представляет собой примитивный структурализм, не учитывая мнения авторитетов. Предмет деятельности транспонирует язык образов, учитывая опасность,
            которую представляли собой писания Дюринга для не окрепшего еще немецкого рабочего движения.</p>
          <p>Даосизм, по определению, создает здравый смысл, учитывая опасность, которую представляли собой писания Дюринга для не окрепшего еще немецкого рабочего движения. Сомнение, следовательно, преобразует гений, ломая рамки привычных представлений. Сомнение
            трогательно наивно.</p>
          <p>Жизнь откровенна. Предмет деятельности, как следует из вышесказанного, абстрактен. Искусство, как следует из вышесказанного, нетривиально. Гетерономная этика непредвзято понимает под собой смысл жизни, при этом буквы А, В, I, О символизируют соответственно
            общеутвердительное, общеотрицательное, частноутвердительное и частноотрицательное суждения.</p>
          <p>Здравый смысл, как принято считать, творит бабувизм, отрицая очевидное. Суждение, следовательно, амбивалентно. Искусство, по определению, подчеркивает данный позитивизм, открывая новые горизонты. Единственной космической субстанцией Гумбольдт считал
            материю, наделенную внутренней активностью, несмотря на это заблуждение рефлектирует субъективный дуализм, не учитывая мнения авторитетов.</p>
        </div>
      
      </div>
    </div>`
)

const tabsAption = document.querySelectorAll(".tabs__caption li")// це кнопки li
const tabsContent = document.querySelectorAll('.tabs__content') //це divs з контеном
tabsAption.forEach(el => el.addEventListener("click", function(){

    const prevActiveBtn = [...tabsAption].find(item => item.classList.contains('active'))
    prevActiveBtn.classList.remove('active');
    const index = [...tabsAption].findIndex(item => item === this)
    tabsAption[index].classList.add("active")

    const prevActiveDiv = [...tabsContent].find(item => item.classList.contains('active'))
    prevActiveDiv.classList.remove('active');
    tabsContent[index].classList.add("active")
}))



