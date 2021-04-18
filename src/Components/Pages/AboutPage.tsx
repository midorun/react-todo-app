import React from 'react'
import { useHistory } from 'react-router-dom'
export default function AboutPage() {
    const history = useHistory();
    return (
        <>
            <h1>AboutPage</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam accusamus eius, odit architecto saepe culpa voluptate eveniet ipsa corporis, aliquid ipsam nulla illum cupiditate veritatis ab, suscipit eum praesentium quibusdam.
            Aperiam facilis nulla nesciunt voluptatum laboriosam ipsum cupiditate officia laudantium harum aspernatur officiis vero fuga nihil corrupti quaerat corporis obcaecati amet maxime, voluptatem pariatur ad sed illum placeat. Ullam, neque.
            Qui provident fugiat atque dolore magni illum possimus ut eum explicabo sed rerum est perferendis consectetur autem, ad adipisci eveniet sapiente nulla reiciendis. Eligendi amet, saepe non rem cumque nihil?
            Ex ea laborum optio quaerat quos, veniam porro eum laboriosam exercitationem fuga vitae, earum ducimus amet dolorum quis sed quo aliquid? Natus itaque dolores quo doloremque quasi veritatis pariatur ipsa?</p>
            <button className="btn" onClick={() => history.push('/')}>Return to tasks</button>
        </>
    )
}
