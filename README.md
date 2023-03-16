# React Weather App
https://reactweatherappv1.netlify.app/

Bu, **React Weather App** adlı bir hava durumu uygulamasıdır. Kullanıcının bir şehir adı girdiği zaman, uygulama o şehirdeki hava durumu verilerini çeker ve sıcaklık, hissedilen sıcaklık, ülke adı, şehir adı ve nüfus bilgilerini gösterir.

![React Weather App Screenshot](https://media.discordapp.net/attachments/458045331024904192/1084076769566527498/dOuit7X1tvSCEIqgP8P1TZVo336HkUAAAAASUVORK5CYII.png?width=694&height=441)

## Kurulum

Projeyi klonlamak için aşağıdaki komutu kullanabilirsiniz:
git clone 'https://github.com/lutfiEmre/react-weather-app.git'


Daha sonra, projenin klasörüne gidin ve aşağıdaki komutları sırasıyla kullanarak gerekli paketleri yükleyin ve uygulamayı çalıştırın:

cd react-weather-app
npm install
npm start

Uygulama http://localhost:3000 adresinde çalışacaktır.

## Kullanım

Uygulama açıldığında, bir ülke adı girmeniz gerekmektedir. Ülke adını girdikten sonra, uygulama hava durumu verilerini çekecek ve ekranda gösterecektir.

## API Key
Uygulama, OpenWeatherMap API'sini kullanmaktadır. API'ye erişmek için bir API anahtarına ihtiyacınız olacaktır. API anahtarınız yoksa, önce [buradan](https://home.openweathermap.org/users/sign_up) kayıt olmanız ve bir anahtar almanız gerekiyor.

     API anahtarınızı aldıktan sonra, projenin ana dizinindeki `src` klasöründe `App.js` dosyasını açın. Dosyanın içerisinde
    const apiKey = "yourapikey"; adındaki değeri göreceksiniz "" başlıkların içerisindeki yourapikey yerine apinizi yapıştırın

## Kullanılan API'ler

- OpenWeatherMap API - Hava Durumu
- Restcountries.com - Ülke bilgisi

## Kullanılan Diller ve Kütüphaneler

- HTML
- CSS
- JavaScript
- React
- Axios
## Kullanım

Uygulama açıldığında, bir ülke adı girmeniz gerekmektedir. Ülke adını girdikten sonra, uygulama hava durumu verilerini çekecek ve ekranda gösterecektir.
## Katkıda Bulunma

Bu proje açık kaynaklıdır ve katkıda bulunmaktan mutluluk duyarız. Herhangi bir sorunuz veya öneriniz varsa, lütfen bir Issue açın veya bir Pull Request gönderin.

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Daha fazla bilgi için `LICENSE` dosyasına bakın.
