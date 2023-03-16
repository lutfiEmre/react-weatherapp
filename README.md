# React Weather App
https://reactweatherappv1.netlify.app/

**TR** Bu, **React Weather App** adlı bir hava durumu uygulamasıdır. Kullanıcının bir şehir adı girdiği zaman, uygulama o şehirdeki hava durumu verilerini çeker ve sıcaklık, hissedilen sıcaklık, ülke adı, şehir adı ve nüfus bilgilerini gösterir.

**EN** This is a weather application built with React. When the user enters a city name, the application fetches the weather data for that city and displays the temperature, feels like temperature, country name, city name, and population information.



![React Weather App Screenshot](https://media.discordapp.net/attachments/458045331024904192/1084076769566527498/dOuit7X1tvSCEIqgP8P1TZVo336HkUAAAAASUVORK5CYII.png?width=694&height=441)

## Kurulum // Setup

**TR** Projeyi klonlamak için aşağıdaki komutu kullanabilirsiniz:

**EN** To clone the project, you can use the following command:
git clone 'https://github.com/lutfiEmre/react-weather-app.git'
--

**TR** Daha sonra, projenin klasörüne gidin ve aşağıdaki komutları sırasıyla kullanarak gerekli paketleri yükleyin ve uygulamayı çalıştırın:

**EN** Then, navigate to the project folder and use the following commands in order to install the necessary packages and run the application:

cd react-weather-app
npm install
npm start

**TR** Uygulama http://localhost:3000 adresinde çalışacaktır.

**EN** The application will run at http://localhost:3000.



## Kullanım // Usage

**TR** Uygulama açıldığında, bir ülke adı girmeniz gerekmektedir. Ülke adını girdikten sonra, uygulama hava durumu verilerini çekecek ve ekranda gösterecektir.

**EN** When the application is opened, you need to enter a country name. After entering the country name, the application will fetch the weather data and display it on the screen.

## API Key
**TR** Uygulama, OpenWeatherMap API'sini kullanmaktadır. API'ye erişmek için bir API anahtarına ihtiyacınız olacaktır. API anahtarınız yoksa, önce [buradan](https://home.openweathermap.org/users/sign_up) kayıt olmanız ve bir anahtar almanız gerekiyor.

**EN** The application uses the OpenWeatherMap API. You will need an API key to access the API. If you do not have an API key, you need to register [here](https://home.openweathermap.org/users/sign_up) and obtain one. After obtaining your API key, you can use it by pasting it into the api section in .env.

     TR API anahtarınızı aldıktan sonra .env'in içerisinde api kısmına yapıştırarak api anahtarınızı kullanabilirsiniz
     EN After obtaining your API key, you can use it by pasting it into the api section in .env.

## Kullanılan API'ler // APIs Used 

- OpenWeatherMap API - Hava Durumu
- Restcountries.com - Ülke bilgisi

## Kullanılan Diller ve Kütüphaneler // Languages and Libraries Used

- HTML
- CSS
- JavaScript
- React
- Axios

## Katkıda Bulunma // Contributing

**TR** Bu proje açık kaynaklıdır ve katkıda bulunmaktan mutluluk duyarız. Herhangi bir sorunuz veya öneriniz varsa, lütfen bir Issue açın veya bir Pull Request gönderin.

**EN** This project is open source, and we would be happy to have contributions. If you have any questions or suggestions, please open an issue or submit a pull request.

## Lisans / Licesne


**TR** Bu proje MIT lisansı altında lisanslanmıştır. Daha fazla bilgi için `LICENSE` dosyasına bakın.

**EN** This project is licensed under the MIT license. See the LICENSE file for more information.
