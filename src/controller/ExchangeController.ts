import { Request, Response } from "express";
import * as requestapi from "request";

class ExchangeController{

    static async getOne (req: Request, res: Response) {
        const apikey: string = '2156|CFxOWpfnYCo8cRp_3vXXk3aXUPGt~f~X';
        const currencies = require("../static/currency.json");
        const moneda = req.params.moneda;
        const baseurl = 'https://api.cambio.today/v1/quotes/';

        const currency = currencies.find(x => x.abrev == moneda);

        if ( !currency ) {
            res.status(409).send('No se pudo resolver la petición');
        }

        let url = baseurl + currency.key + '/ARS/json?quantity=1&key=' + apikey;

        const data = {
            "moneda": moneda,
            "precio": 0
        };

        requestapi.get(url, (error, response, body) => {
            if(error) {
                res.status(409).send('No se pudo resolver la petición');
            }
            const result = JSON.parse(body).result;
            data.precio = result.value;
            res.status(201).send(data);
        });
    }
};

export default ExchangeController;