import React from "react";
import { useRouter } from "next/router";


const Filters = () => {

    const router = useRouter();

    let queryParams;
    if (typeof window !== 'undefined') {
        queryParams = new URLSearchParams(window.location.search)
    }

    function handleClick(checkbox) {
        if (typeof window !== 'undefined') {
            const checkboxes = document.getElementsByName(checkbox.name)

            checkboxes.forEach(item => {
                if (item != checkbox) item.checked = false;
            })
        }

        if (checkbox.checked === false) {
            // Delete the filter from query
            if (queryParams.has(checkbox.name)) {
                queryParams.delete(checkbox.name);
                router.replace({
                    search: queryParams.toString(),
                });
            }
        } else {
            if (queryParams.has(checkbox.name)) {
                queryParams.set(checkbox.name, checkbox.value);
            } else {
                queryParams.append(checkbox.name, checkbox.value);
            }

            router.replace({
                search: queryParams.toString(),
            });
        }
    }
    function checkHandler(checkBoxType, checkBoxValue) {
        if (typeof window !== "undefined") {
            const value = queryParams.get(checkBoxType);
            if (checkBoxValue === value) return true;
            return false;
        }
    }

    return (
        <div className="sidebar mt-5">
            <h3>Filters</h3>

            <hr />
            <h5 className="filter-heading mb-3">Job Type</h5>

            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    name="jobType"
                    id="check1"
                    value="Permanent"
                    defaultChecked={checkHandler('jobType', "Permanent")}
                    onClick={(e) => handleClick(e.target)}
                />
                <label className="form-check-label" htmlFor="check1">
                    Permanent
                </label>
            </div>

            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    name="jobType"
                    id="check2"
                    value="Temporary"
                    defaultChecked={checkHandler('jobType', "Temporary")}
                    onClick={(e) => handleClick(e.target)}
                />
                <label className="form-check-label" htmlFor="check2">
                    Temporary
                </label>
            </div>

            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    name="jobType"
                    id="check3"
                    value="Internship"
                    defaultChecked={checkHandler('jobType', "Internship")}
                    onClick={(e) => handleClick(e.target)}
                />
                <label className="form-check-label" htmlFor="check3">
                    Internship
                </label>
            </div>

            <hr />
            <h5 className="mb-3">Education</h5>

            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    name="education"
                    id="check4"
                    value="Bachelors"
                    defaultChecked={checkHandler('education', "Bachelors")}
                    onClick={(e) => handleClick(e.target)}
                />
                <label className="form-check-label" htmlFor="check4">
                    Bachelors
                </label>
            </div>

            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    name="education"
                    id="check5"
                    value="Masters"
                    defaultChecked={checkHandler('education', "Master")}
                    onClick={(e) => handleClick(e.target)}
                />
                <label className="form-check-label" htmlFor="check5">
                    Masters
                </label>
            </div>

            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    name="education"
                    id="check6"
                    value="Phd"
                    defaultChecked={checkHandler('education', "Phd")}
                    onClick={(e) => handleClick(e.target)}
                />
                <label className="form-check-label" htmlFor="check6">
                    Phd
                </label>
            </div>

            <hr />

            <h5 className="mb-3">Experience</h5>

            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    name="experience"
                    id="check7"
                    value="No Experience"
                    defaultChecked={checkHandler('experience', "No Experience")}
                    onClick={(e) => handleClick(e.target)}
                />
                <label className="form-check-label" htmlFor="check7">
                    No Experience
                </label>
            </div>

            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    name="experience"
                    id="check8"
                    value="1 Year"
                    defaultChecked={checkHandler('experience', "1 Year")}
                    onClick={(e) => handleClick(e.target)}
                />
                <label className="form-check-label" htmlFor="check8">
                    1 Years
                </label>
            </div>

            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    name="experience"
                    id="check9"
                    value="2 Year"
                    defaultChecked={checkHandler('experience', "2 Year")}
                    onClick={(e) => handleClick(e.target)}
                />
                <label className="form-check-label" htmlFor="check9">
                    2 Years
                </label>
            </div>

            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    name="experience"
                    id="check10"
                    value="3 Years above"
                    defaultChecked={checkHandler('experience', "3 Years above")}
                    onClick={(e) => handleClick(e.target)}
                />
                <label className="form-check-label" htmlFor="check10">
                    3 Year+
                </label>
            </div>

            <hr />
            <h5 className="mb-3">Salary Range</h5>

            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    name="salary"
                    id="check11"
                    value="100000-500000"
                    defaultChecked={checkHandler('salary', "100000-500000")}
                    onClick={(e) => handleClick(e.target)}
                />
                <label className="form-check-label" htmlFor="check11">
                    ₹1,00,000 - ₹5,00,000
                </label>
            </div>

            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    name="salary"
                    id="check12"
                    value="500000-1000000"
                    defaultChecked={checkHandler('salary', "500000-1000000")}
                    onClick={(e) => handleClick(e.target)}
                />
                <label className="form-check-label" htmlFor="check12">
                    ₹5,00,000 - ₹10,00,000
                </label>
            </div>

            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    name="salary"
                    id="check13"
                    value="1000000-2000000"
                    defaultChecked={checkHandler('salary', "1000000-2000000")}
                    onClick={(e) => handleClick(e.target)}
                />
                <label className="form-check-label" htmlFor="check13">
                    ₹10,00,000 - ₹20,00,000
                </label>
            </div>

            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    name="salary"
                    id="defaultCheck2"
                    value="300000-500000"
                    defaultChecked={checkHandler('salary', "300000-500000")}
                    onClick={(e) => handleClick(e.target)}
                />
                <label className="form-check-label" htmlFor="defaultCheck2">
                    ₹20,00,000 - ₹50,00,000
                </label>
            </div>

            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    name="salary"
                    id="check14"
                    value="500000-1000000"
                    defaultChecked={checkHandler('salary', "500000-1000000")}
                    onClick={(e) => handleClick(e.target)}
                />
                <label className="form-check-label" htmlFor="check14">
                    ₹50,00,000 - ₹1,00,00,000
                </label>
            </div>

            <hr />
        </div>
    );
};

export default Filters;