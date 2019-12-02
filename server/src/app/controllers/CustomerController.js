import Customer from '../models/Customer';

class CustomerController {
    async store(req, res) {
        const { filename: image } = req.file;
        const { id, name, email, phone } = req.body;

        const customer = await Customer.create({
            id,
            name,
            email,
            phone,
            image,
        });

        return res.json(customer);
    }

    async show(req, res) {
        const customer = await Customer.findByPk(req.params.id);

        return res.json(customer);
    }
}

export default new CustomerController();
