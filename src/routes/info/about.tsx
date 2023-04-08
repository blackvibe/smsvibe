import { A, Title } from "solid-start";
import { t } from "./../../store"

export default function About() {
  return (
    <>
     <Title>{t.title.about}</Title>
     <main class="m-auto max-w-lg">
		
		<div class="p-10 sm:p-0">
            <h1 class="text-4xl mb-8 text-gray-600">Повесть о нашем проекте :)</h1>
            <p class="font-semibold">Наш сервис СМС позволяет вам получать текстовые сообщения на временный, виртуальный
                номер телефона. Это может быть особенно полезно в ситуациях, когда вам необходимо получать СМС для проверки,
                но вы не хотите использовать свой личный номер телефона. Некоторые из преимуществ использования нашего
                СМС-сервиса для получения сообщений на временный номер включают:</p>
            <ul class="list-decimal list-outside">
                <li>Конфиденциальность: Ваш личный номер телефона не попадает в поле зрения отправителя
    
                </li>
                <li>Удобство: Вы можете получить доступ к сообщениям с любого устройства, подключенного к Интернету
    
                </li>
                <li>Гибкость: Вы можете использовать разные временные номера для каждого СМС-сервиса
    
                </li>
                <li>Безопасность: Временные номера помогут защитить вас от спама и нежелательных сообщений
    
                </li>
            </ul>
            <p class="font-semibold">С помощью нашего SMS-сервиса вы можете легко и безопасно получать сообщения на
                временный номер без необходимости использования физической SIM-карты или телефона. Попробуйте
                воспользоваться этой услугой и убедитесь, насколько она может быть удобной и полезной.
    
            </p>
        </div>
	</main>
    </>
   
  );
}
