import React, { useState } from 'react';
import { Dumbbell } from 'lucide-react';
import Label from '../Form/Label';
import Input from '../Form/Input';
import SecondaryBtn from '../layouts/SecondaryBtn';

const BmiCalculator = () => {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [bmi, setBmi] = useState(null);

    // Function to calculate BMI
    const calculateBmi = () => {
        if (weight && height) {
            const calculatedBmi = (weight / ((height * height) / 10000)).toFixed(2);
            setBmi(calculatedBmi);
        } else {
            // Handle case where weight or height is not provided
            setBmi(null);
        }
    };

    return (
        <>
            <div className="w-full h-auto flex items-center lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4">
                <div className="w-full h-auto flex items-center justify-center flex-col">
                    <h6 className="lg:text-lg md:text-lg sm:text-base text-base font-medium text-gray-200 flex items-center gap-x-2 bg-black/20 rounded-t-md py-2 px-4">
                        <Dumbbell className="w-4 h-4 -rotate-45 text-brightRed" />
                        Calculate Your BMI
                    </h6>
                    <div className="w-full h-auto flex items-end justify-center bg-black/20 rounded-md lg:gap-5 md:gap-5 sm:gap-3 gap-2 py-10 lg:px-0 md:px-0 sm:px-2 px-4 flex-wrap">
                        <div className="lg:w-[25%] md:w-[40%] sm:w-[50%] w-full h-auto p-2">
                            <Label htmlFor="weight" className="text-white">Weight (Kg)</Label>
                            <Input
                                id="weight"
                                name="weight"
                                type="text"
                                placeholder="Enter Your Weight"
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                            />
                        </div>

                        <div className="lg:w-[25%] md:w-[40%] sm:w-[50%] w-full h-auto p-2">
                            <Label htmlFor="height" className="text-white">Height (cm)</Label>
                            <Input
                                id="height"
                                name="height"
                                type="text"
                                placeholder="Enter Your Height"
                                value={height}
                                onChange={(e) => setHeight(e.target.value)}
                            />
                        </div>

                        <div className="lg:w-[25%] md:w-[40%] sm:w-[50%] w-full h-auto p-2">
                            <SecondaryBtn
                                type="button"
                                className="w-full h-11 justify-center"
                                onClick={calculateBmi}
                            >
                                Calculate BMI
                            </SecondaryBtn>
                        </div>
                    </div>
                    {/* Display BMI */}
                    {bmi !== null && (
                        <div className="bg-black rounded-b-md px-6 py-2.5">
                            <p className="text-brightRed">
                                YOUR BMI: <span className="font-bold">{bmi}</span>
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default BmiCalculator;