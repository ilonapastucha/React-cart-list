
# Wymagania

Node wersja 12.x lub wyższa

# Uruchomienie

Instalacja zależności:

``` npm i ```


Uruchomienie projektu:

``` npm start ```

# API

W ramach projektu dostępne jest rest API:

## **GET** /api/cart

Zwraca zawartość koszyka.

### Odpowiedź

JSON z listą obiektów z polami:

* **pid** - identyfikator produktu
* **name** - nazwa produktu
* **price** - cena produktu
* **max** - maksymalna liczba sztuk produktu jaka może być dodana do koszyka
* **min** - minimalna liczba sztuk produktu jaka może być dodana do koszyka
* **isBlocked** - określa, czy można zmienić liczbę sztuk produktu dodanych do koszyka


## **POST** /api/product/check

Sprawdza, czy wprowadzona liczba sztuk produktu jest poprawna

### Zapytanie

Obiekt JSON z polami:

* **pid** - identyfikator sprawdzanego produktu
* **quantity** - wprowadzona liczba sztuk produktu

### Odpowiedź

Obiekt JSON z polami:

* **isError** - określa czy wystąpił błąd
* **success** - określa czy wprowadzone dane są poprawne
* **message** - wiadomość (w przypadku wystąpienia błędu)
* **errorType** - typ błędu (INCORRECT_BODY, INCORRECT_TYPE, MISSING_PROPERTY, NOT_FOUND, INCORRECT_QUANTITY)


