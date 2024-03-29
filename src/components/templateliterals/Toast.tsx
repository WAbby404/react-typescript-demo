
// position can be one of
//  "left-center" | "left-top" | "left-bottom" | "center" | "center-top"
//  "center-bottom" | "reight-center" | "right-top" | "right-bottom"

type HorizontalPosition = "left" | "center" | "right";
type VerticalPosition = 'top' | 'center' | 'bottom';

type ToastProps = {
    position: Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'> | 'center'
}

export const Toast = ({ position }: ToastProps) => {
    return (
        <div>
            toast Notification Position - {position}
        </div>
    )
}