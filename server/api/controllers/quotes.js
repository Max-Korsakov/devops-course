import quotes from "quotesy";
import { v4 as uuidv4 } from 'uuid';

let quotesList = quotes.parse_json().map(quote => {
    return {
        ...quote,
        id: uuidv4()
    }
});

const getQuotesList = async (req, res) => {
    try {
        res.status(200).json(quotesList);
    } catch (error) {
        res.status(status).json({
            success: false,
            message: error.message ? error.message : error
        });
    }
};

const getRandomQuote = async (req, res) => {
    let randomQuoteIndex = Math.floor(Math.random() * (quotesList.length - 1));
    try {
        res.status(200).json(quotesList[randomQuoteIndex]);
    } catch (error) {
        res.status(status).json({
            success: false,
            message: error.message ? error.message : error
        });
    }
};

const getQuoteById = async (req, res) => {
    let id = req.params.id;
    const quote = quotesList.find(quote => quote.id === id)
    try {
        res.status(200).json(quote);
    } catch (error) {
        res.status(status).json({
            success: false,
            message: error.message ? error.message : error
        });
    }
};

const updateQuote = async (req, res) => {
    try {
        let id = req.params.id;
        let data = req.body
        const quoteId = quotesList.findIndex(quote => quote.id === id)
        quotesList[quoteId] = {
            ...quotesList[quoteId],
            data
        }

        res.status(200).json(quotesList[quoteId]);
    } catch (error) {
        res.status(status).json({
            success: false,
            message: error.message ? error.message : error
        });
    }
};

const createQuote = async (req, res) => {
    try {
        let { author, text, source, tags, createdBy } = req.body
        const newQuote = {
            id: uuidv4(),
            author,
            text,
            source,
            tags,
            createdBy,
            createdAt: Date.now(),
            updatedAt: newQuote.createdAt,
            isDeleted: false

        }
        quotesList.push(newQuote)
        res.status(200).json(quotesList[quotesList.length - 1]);
    } catch (error) {
        res.status(status).json({
            success: false,
            message: error.message ? error.message : error
        });
    }
};

const deleteQuote = async (req, res) => {
    try {
        let id = req.params.id;
        const quoteId = quotesList.findIndex(quote => quote.id === id)
        quotesList.splice(quoteId, 1)

        res.status(200).json(true);
    } catch (error) {
        res.status(status).json({
            success: false,
            message: error.message ? error.message : error
        });
    }
};


export { getQuotesList, getRandomQuote, getQuoteById, updateQuote, createQuote, deleteQuote }