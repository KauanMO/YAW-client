import { LoginAdministrador } from "./adminType";
import { Convidado } from "./convidadoType";
import { Pedido } from "./pedidoType";

export const convidadosMock: Convidado[] = [
    {
        id: 1,
        nome: 'Melissa Rodrigues',
        numero: '11999999999'
    },
    {
        id: 2,
        nome: 'Kauan Oliveira',
        numero: '11999999998'
    },
]

export const pedidosMock: Pedido[] = [
    {
        id: 1,
        link: 'https://www.amazon.com.br/Fritadeira-Sem-%C3%93leo-Oster-220V/dp/B0B7278DHZ?crid=PQC9WRO294Z4&dib=eyJ2IjoiMSJ9.Wvnenzr_or7iw7jdwmiMWB-2P7MipppuFfomeUfdCYoJcVviXStTWRSe28D7O9awQSPHsKo5flpN1z12SguHy5ONjMJEuCvhYnxYmUs-EhAheT7Raa0RFSjS9z7UG1XKtYC3AWodS_kooTg8uDXSYomfFZCVaCEjn8HivPTGnO5dGy8KY78IdJVm3kwYx27R34GSwcbxpbzET4G-kuYdJGC7hm02WrcxRSMkiezHsSeqmFZxsrPt6ZZbbSbjfOgUd4shOgFL1ooROGqrCtuD8pkxb2ABetLUsumtpd1uk7Y.M_lXP88nyEtDBfMBn2jlnsEPFXuJcbuN8khyDIIFyng&dib_tag=se&keywords=air%2Bfryer&qid=1759163831&sprefix=air%2Bfr%2Caps%2C242&sr=8-14&ufe=app_do%3Aamzn1.fos.9e6a115c-05b9-4b96-8e1c-b1f9ce2ac1a6&th=1',
        foto: 'https://m.media-amazon.com/images/I/51nlF3BHjaL._AC_SX679_.jpg',
        titulo: 'Air Fryer',
        preco: 339.00,
        descricao: "Air fryer maneira pra fritar uns salgados quando nos visitarem"
    },
    {
        id: 2,
        link: 'https://www.amazon.com.br/Fritadeira-Sem-%C3%93leo-Oster-220V/dp/B0B7278DHZ?crid=PQC9WRO294Z4&dib=eyJ2IjoiMSJ9.Wvnenzr_or7iw7jdwmiMWB-2P7MipppuFfomeUfdCYoJcVviXStTWRSe28D7O9awQSPHsKo5flpN1z12SguHy5ONjMJEuCvhYnxYmUs-EhAheT7Raa0RFSjS9z7UG1XKtYC3AWodS_kooTg8uDXSYomfFZCVaCEjn8HivPTGnO5dGy8KY78IdJVm3kwYx27R34GSwcbxpbzET4G-kuYdJGC7hm02WrcxRSMkiezHsSeqmFZxsrPt6ZZbbSbjfOgUd4shOgFL1ooROGqrCtuD8pkxb2ABetLUsumtpd1uk7Y.M_lXP88nyEtDBfMBn2jlnsEPFXuJcbuN8khyDIIFyng&dib_tag=se&keywords=air%2Bfryer&qid=1759163831&sprefix=air%2Bfr%2Caps%2C242&sr=8-14&ufe=app_do%3Aamzn1.fos.9e6a115c-05b9-4b96-8e1c-b1f9ce2ac1a6&th=1',
        foto: 'https://m.media-amazon.com/images/I/51nlF3BHjaL._AC_SX679_.jpg',
        titulo: 'Air Fryer',
        preco: 339.00,
        descricao: "Air fryer maneira pra fritar uns salgados quando nos visitarem"
    },
    {
        id: 3,
        link: 'https://www.amazon.com.br/Fritadeira-Sem-%C3%93leo-Oster-220V/dp/B0B7278DHZ?crid=PQC9WRO294Z4&dib=eyJ2IjoiMSJ9.Wvnenzr_or7iw7jdwmiMWB-2P7MipppuFfomeUfdCYoJcVviXStTWRSe28D7O9awQSPHsKo5flpN1z12SguHy5ONjMJEuCvhYnxYmUs-EhAheT7Raa0RFSjS9z7UG1XKtYC3AWodS_kooTg8uDXSYomfFZCVaCEjn8HivPTGnO5dGy8KY78IdJVm3kwYx27R34GSwcbxpbzET4G-kuYdJGC7hm02WrcxRSMkiezHsSeqmFZxsrPt6ZZbbSbjfOgUd4shOgFL1ooROGqrCtuD8pkxb2ABetLUsumtpd1uk7Y.M_lXP88nyEtDBfMBn2jlnsEPFXuJcbuN8khyDIIFyng&dib_tag=se&keywords=air%2Bfryer&qid=1759163831&sprefix=air%2Bfr%2Caps%2C242&sr=8-14&ufe=app_do%3Aamzn1.fos.9e6a115c-05b9-4b96-8e1c-b1f9ce2ac1a6&th=1',
        foto: 'https://m.media-amazon.com/images/I/51nlF3BHjaL._AC_SX679_.jpg',
        titulo: 'Air Fryer',
        preco: 339.00,
        descricao: "Air fryer maneira pra fritar uns salgados quando nos visitarem"
    },
    {
        id: 4,
        link: 'https://www.amazon.com.br/Fritadeira-Sem-%C3%93leo-Oster-220V/dp/B0B7278DHZ?crid=PQC9WRO294Z4&dib=eyJ2IjoiMSJ9.Wvnenzr_or7iw7jdwmiMWB-2P7MipppuFfomeUfdCYoJcVviXStTWRSe28D7O9awQSPHsKo5flpN1z12SguHy5ONjMJEuCvhYnxYmUs-EhAheT7Raa0RFSjS9z7UG1XKtYC3AWodS_kooTg8uDXSYomfFZCVaCEjn8HivPTGnO5dGy8KY78IdJVm3kwYx27R34GSwcbxpbzET4G-kuYdJGC7hm02WrcxRSMkiezHsSeqmFZxsrPt6ZZbbSbjfOgUd4shOgFL1ooROGqrCtuD8pkxb2ABetLUsumtpd1uk7Y.M_lXP88nyEtDBfMBn2jlnsEPFXuJcbuN8khyDIIFyng&dib_tag=se&keywords=air%2Bfryer&qid=1759163831&sprefix=air%2Bfr%2Caps%2C242&sr=8-14&ufe=app_do%3Aamzn1.fos.9e6a115c-05b9-4b96-8e1c-b1f9ce2ac1a6&th=1',
        foto: 'https://m.media-amazon.com/images/I/51nlF3BHjaL._AC_SX679_.jpg',
        titulo: 'Air Fryer',
        preco: 339.00,
        descricao: "Air fryer maneira pra fritar uns salgados quando nos visitarem"
    },
    {
        id: 5,
        link: 'https://www.amazon.com.br/Fritadeira-Sem-%C3%93leo-Oster-220V/dp/B0B7278DHZ?crid=PQC9WRO294Z4&dib=eyJ2IjoiMSJ9.Wvnenzr_or7iw7jdwmiMWB-2P7MipppuFfomeUfdCYoJcVviXStTWRSe28D7O9awQSPHsKo5flpN1z12SguHy5ONjMJEuCvhYnxYmUs-EhAheT7Raa0RFSjS9z7UG1XKtYC3AWodS_kooTg8uDXSYomfFZCVaCEjn8HivPTGnO5dGy8KY78IdJVm3kwYx27R34GSwcbxpbzET4G-kuYdJGC7hm02WrcxRSMkiezHsSeqmFZxsrPt6ZZbbSbjfOgUd4shOgFL1ooROGqrCtuD8pkxb2ABetLUsumtpd1uk7Y.M_lXP88nyEtDBfMBn2jlnsEPFXuJcbuN8khyDIIFyng&dib_tag=se&keywords=air%2Bfryer&qid=1759163831&sprefix=air%2Bfr%2Caps%2C242&sr=8-14&ufe=app_do%3Aamzn1.fos.9e6a115c-05b9-4b96-8e1c-b1f9ce2ac1a6&th=1',
        foto: 'https://m.media-amazon.com/images/I/51nlF3BHjaL._AC_SX679_.jpg',
        titulo: 'Air Fryer',
        preco: 339.00,
        descricao: "Air fryer maneira pra fritar uns salgados quando nos visitarem"
    },
    {
        id: 6,
        link: 'https://www.amazon.com.br/Fritadeira-Sem-%C3%93leo-Oster-220V/dp/B0B7278DHZ?crid=PQC9WRO294Z4&dib=eyJ2IjoiMSJ9.Wvnenzr_or7iw7jdwmiMWB-2P7MipppuFfomeUfdCYoJcVviXStTWRSe28D7O9awQSPHsKo5flpN1z12SguHy5ONjMJEuCvhYnxYmUs-EhAheT7Raa0RFSjS9z7UG1XKtYC3AWodS_kooTg8uDXSYomfFZCVaCEjn8HivPTGnO5dGy8KY78IdJVm3kwYx27R34GSwcbxpbzET4G-kuYdJGC7hm02WrcxRSMkiezHsSeqmFZxsrPt6ZZbbSbjfOgUd4shOgFL1ooROGqrCtuD8pkxb2ABetLUsumtpd1uk7Y.M_lXP88nyEtDBfMBn2jlnsEPFXuJcbuN8khyDIIFyng&dib_tag=se&keywords=air%2Bfryer&qid=1759163831&sprefix=air%2Bfr%2Caps%2C242&sr=8-14&ufe=app_do%3Aamzn1.fos.9e6a115c-05b9-4b96-8e1c-b1f9ce2ac1a6&th=1',
        foto: 'https://m.media-amazon.com/images/I/51nlF3BHjaL._AC_SX679_.jpg',
        titulo: 'Air Fryer',
        preco: 339.00,
        descricao: "Air fryer maneira pra fritar uns salgados quando nos visitarem"
    },
]

export const loginAdminMock: LoginAdministrador = {
    login: 'admin',
    senha: 'admin'
}