import { addExpense, editExpense ,removeExpense } from '../../actions/expenses';

test('Should expect remove expense object' , () => {
    const action = removeExpense({ id: '123abc' })
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('Should expect Edit expense object', () => {
    const action = editExpense( '123abc', { note:'New Note value' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'New Note value'
        }
    });
});

test('Should expect add expense action object with provided values', () => {
    const expenseData = {
        description : 'Rent',
        amount : 109500,
        createdAt : 10000,
        note : 'This is my last months Rent.'
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('Should expect add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            amount: 0,
            createdAt: 0,
            note: ''
        }
    });
});