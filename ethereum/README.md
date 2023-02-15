

1) npx hardhat node//запускаем локальную ноду

2) npx hardhat run --network localhost scripts/deploy.js // в новом окне терминала

3) переписываем код в файле deploy.js
   - убираем все комментарии
   - в строке с .deploy поставить те параметры, которые указаны в конструкторе контракта
   - подставить своё название контракта и переменной

4) проверяем компиляцию и deploy контракта в Remix (f.e.London VM)

5)переключаемя на Hardhat provider

6) после того как добавили новый контракт ContactFactory надо поменять в deploy.js ф-ции и переменные, а также убрать параметры, т.к. в этом контракте используется дефолтный коструктор без параметров

7) переходим на https://app.infura.io, создаем проект на Ethereum => Goerly

8)  в файле hardhat.config.js вставляем после версии solidity 
goerli: {
      url: 'добавляем адрес из endpoints',
      accounts: 'добавляем приватный ключ из Metamask суть Goerli',
    },
  },

9) npx hardhat run scripts/deploy.js --network goerli

10) в Remix выбрать Enjected Provider появится адрес Metamask  и за газ проверить работу контракта

ContactFactory Hardhat deploy:
0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6

ContactFactory Goerly deploy:
0xC4b92E363E2fbCE2d7A61f2d763A6A7a11272E73
