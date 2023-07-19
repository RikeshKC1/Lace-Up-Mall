import * as Yup from "yup";
export const curdSchema=Yup.object({
shoeName:Yup.string().min(3).max(50).required("ShoeName is required"),
shoeDescription:Yup.string().min(5).max(100).required("Shoe Description is required"),
shoeBrand:Yup.string().min(2).max(50).required("Shoe Brand is required"),
shoePrice:Yup.string().min(1).max(20).required("Shoe Price is required"),
shoeColor:Yup.string().min(2).max(25).required("Shoe color is required"),
S:Yup.string().min(1).max(20).required("S size is required"),
M:Yup.string().min(1).max(20).required("M size is required"),
L:Yup.string().min(1).max(20).required("L size is required"),
XL:Yup.string().min(1).max(20).required("XL size is required"),
XXL:Yup.string().min(1).max(20).required("XXL size is required"),


});