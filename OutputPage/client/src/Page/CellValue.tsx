import React, {ChangeEvent, useState} from 'react';
import Button from '@mui/material/Button';
import TableCell from '@mui/material/TableCell';
import { ApiData } from "../models";
type ItemState = {
    [key: string]: string;
};
interface CellValueProps {
    item: ApiData
    index:number
}

function CellValue({ item, index }: CellValueProps) {
    const initialItemState: ItemState = {};
    Object.keys(item).forEach((key) => {
        initialItemState[key] = '';
    });

    const [isEditing, setIsEditing] = useState(false);
    const [editedValues, setEditedValues] = useState<ItemState>(initialItemState);
    const urlRegExp: RegExp =
        /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i;

    function changeEditing() {
        setIsEditing(!isEditing);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setEditedValues((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    function saveValue() {
        // Perform necessary actions with the saved values (e.g., update state or send to server)
        console.log("Saved values:", editedValues);
        setIsEditing(false);
    }

    return (
        <>
            {Object.entries(item).map(([key, value]) => {
                if (!urlRegExp.test(value)) {
                    return (
                        <TableCell key={key} component="th" scope="row">
                            {isEditing ? (
                                <input
                                    type="text"
                                    name={key}
                                    value={editedValues[key]}
                                    onChange={handleInputChange}
                                />
                            ) : (
                                editedValues[key] || value
                            )}
                        </TableCell>
                    );
                }
                return null;
            })}
            <TableCell>
                <Button onClick={isEditing ? saveValue : changeEditing}>
                    {isEditing ? 'Save' : 'Edit'}
                </Button>
            </TableCell>
        </>
    );
}

export default CellValue;