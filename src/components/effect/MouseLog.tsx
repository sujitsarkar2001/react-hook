import React, { Component, useEffect, useState } from "react";


type MyProps = {
    name: string;
};

interface Position {
    x: number,
    y: number
}

export class ClassMouse extends Component<MyProps, Position> {

    state: Position = { x: 0, y: 0 }

    mousePosition = e => this.setState({ x: e.clientX, y: e.clientY })

    componentDidMount() {
        window.addEventListener('mouseover', this.mousePosition)
    }

    componentWillUnmount() {
        window.removeEventListener('mousemove', this.mousePosition)
    }

    render() {
        const { x, y } = this.state
        return (
            <div className="bg-green-500 py-3 px-4 text-white text-center">
                <p className="text-lg">Class</p>
                <p> X: { x }, Y : { y }</p>
            </div>
        )
    }
}

export const HookMouse: React.FC = () => {

    const [position, setPosition] = useState<Position>({
        x: 0,
        y: 0
    })

    const mousePosition = (e: React.MouseEvent<HTMLDivElement>): void => {
        setPosition({ x: e.clientX, y: e.clientY })
    }

    useEffect(() => {
        window.addEventListener('mouseover', mousePosition)

        return () => {
            console.log('Clear');
            window.removeEventListener('mousemove', mousePosition)
        }
        
    }, [])

    return (
        <div className="bg-green-500 py-3 px-4 text-white text-center">
            <p className="text-lg">Function</p>
            <p> X: { position.x }, Y : { position.y }</p>
        </div>
    )
}