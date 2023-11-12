// models/calcModel.js
const calcModel = {
    calculate: (x, y, opt) => {
        switch (opt) {
            case 'plus':
                return x + y;
            case 'minus':
                return x - y;
            case 'multi':
                return x * y;
            case 'divide':
                if (y == 0)
                    return 'Cannot divide by zero!!'
                return x / y;
            default:
                return null;
        }
    },
};

module.exports = calcModel;