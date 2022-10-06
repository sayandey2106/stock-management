import {
   SET_EXAM_HISTORY, SET_SUMMARY, SET_UPCOMING
} from "../../constants/dashboard/dashboardConstants";
import UNIVERSAL from "../../config/config";
import {setLoader, unsetLoader}
    from "../loader/loaderAction";
import {onLogout} from '../loginActions'


export function get_dashboard_data() {
    return (dispatch) => {
        dispatch(setLoader());
        console.log("get dashboard data")
        return fetch(UNIVERSAL.BASEURL + "api/Sauth/dashboard", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                // user_token: token,
                // organization_id: oid
                // company_id:id
                "auth-token" : (sessionStorage.getItem('sre_auth_token'))
            },
            // body: JSON.stringify({
            //     user_id:user_id
        
            //  }),
        }).then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson)
                if (responseJson.status) {

                    dispatch({type:SET_SUMMARY,payload:responseJson.summary});
                    dispatch({type:SET_EXAM_HISTORY,payload:responseJson.history});
                    dispatch({type:SET_UPCOMING,payload:responseJson.upcoming});
                    // dispatch(set_snack_bar(true, responseJson.message));
                    console.log(responseJson,"hi");

                } else {
                    
                
                }
                dispatch(unsetLoader())
            })
            .catch((error) => {
                console.error(error);
            });
    };
}
