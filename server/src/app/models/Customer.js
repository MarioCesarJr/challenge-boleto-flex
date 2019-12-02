import Sequelize, { Model } from 'sequelize';

class Customer extends Model {
    static init(sequelize) {
        super.init(
            {
                id: {
                    type: Sequelize.STRING,
                    primaryKey: true,
                },

                name: Sequelize.STRING,
                email: Sequelize.STRING,
                phone: Sequelize.STRING,
                image: Sequelize.STRING,
                url: {
                    type: Sequelize.VIRTUAL,
                    get() {
                        return `${process.env.APP_URL}/files/${this.image}`;
                    },
                },
            },
            {
                sequelize,
            }
        );
        return this;
    }
}

export default Customer;
