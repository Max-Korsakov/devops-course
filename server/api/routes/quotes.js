import { Router } from 'express';

import {
    getQuotesList,
    getRandomQuote,
    createQuote,
    getQuoteById,
    updateQuote,
    deleteQuote
} from '../controllers/quotes';

const quotesRouter = Router();


quotesRouter.get('/', getQuotesList);

quotesRouter.get('/random',getRandomQuote);

quotesRouter.post('/', createQuote);

quotesRouter.get('/:id', getQuoteById);

quotesRouter.put('/:id', updateQuote);

quotesRouter.delete('/:id', deleteQuote);


export { quotesRouter };