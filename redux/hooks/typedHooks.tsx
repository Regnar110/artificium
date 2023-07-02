import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
// W pliku tym tworzymy nasze własne hooki, które są już otypowane dzieki czemu nie będziemy musieli ich
// przy każdym użyciu ręcznie typować.
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;