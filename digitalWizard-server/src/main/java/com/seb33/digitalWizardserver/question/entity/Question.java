package com.seb33.digitalWizardserver.question.entity;


import com.seb33.digitalWizardserver.answer.entity.Answer;
import com.seb33.digitalWizardserver.audit.Auditable;
import com.seb33.digitalWizardserver.member.entity.Member;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Setter
@Getter
@Table
@Entity
public class Question extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionId;

    @Column(columnDefinition = "TEXT")
    private String title;
    private String body;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    @OrderBy("createdAt DESC")
    @OneToMany(mappedBy = "question", cascade = CascadeType.MERGE)
    private List<Answer> answers = new ArrayList<>();

    public static Question of(String title, String body, Member member){
        Question question = new Question();
        question.setTitle(title);
        question.setBody(body);
        question.setMember(member);
        return question;
    }
}
