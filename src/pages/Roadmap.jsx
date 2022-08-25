import React from "react";
import {useState} from 'react';
import "../css/additional-styles/roadmap.css";
import { motion } from 'framer-motion';
import { useState } from "react";
import "../css/additional-styles/roadmap.css";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 150) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};

function Roadmap() {
  return (
    <div>
      {/* motion */}
      <div>
        <motion.h1
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{
            type: "tween",
            duration: "1",
            delay: "0"
          }}
          >
          <time class="text-lg font-bold text-gray-900 dark:text-black-1200" style={{position: "absolute", left: "20px", padding: "15px",
          right: "30%", fontSize: "30px"}}>How can I help myself?</time>
        </motion.h1>
      </div>
      {/* Roadmap */}
      <div className="roadmap-box" style={{position: "absolute", top: "700px", left: "20px", padding: "20px", paddingTop: "10px",right: "35%"}}>
        <ol class="relative border-l border-gray-200 dark:border-gray-700"> 
          {/* Group-1(1-2-3-4) */}
          <motion.h1
                initial={{ x: -1000 }}
                animate={{ x: 0 }}
                transition={{
                  type: "tween",
                  duration: "1",
                  delay: "0"
                }}
                >
              {/* 1 */}
              <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="text-lg font-semibold text-gray-900 dark:text-black">Meet yourself where you are</time>
            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Depression is common. It affects millions of people, including some in your life. You may not realize they face similar challenges, emotions, and obstacles.
            The key to navigating depression is to be open, accepting, and loving toward yourself and what you’re going through.</p>
            {/* <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-black-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg class="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a> */}
              </li>
              {/* 2 */}
              <li class="mb-10 ml-4">
                  <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time class="text-lg font-semibold text-gray-900 dark:text-black">Consider a walk around the block or any exerciseMeet yourself where you are</time>
                  <p class="text-base font-normal text-gray-500 dark:text-gray-400"><ReadMore>On days when you feel as if you can’t get out of bed, exercise may seem like the last thing you’d want to do. However, exercise and physical activity can help to lower symptoms of depression and boost energy levels.
                  ResearchTrusted Source suggests that, for some people, exercise can be as effective as medication at relieving depression symptoms. It may also help preventTrusted Source future depressive episodes.
                  Even when you have the feeling that you’re unable to or have very little energy, see if you’d be willing to do the opposite of what your mood is telling you to do, such as curling up in bed. Instead, set a small goal for yourself, such as taking a walk around the block.</ReadMore></p>
              </li>
              {/* 3 */}
              <li class="mb-10 ml-4">
                  <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time class="text-lg font-semibold text-gray-900 dark:text-black">Know that today isn’t indicative of tomorrow</time>
                  <p class="text-base font-normal text-gray-500 dark:text-gray-400"><ReadMore>Internal emotions and thoughts can change from day to day. Tracking experiences through journaling or keeping a mood diary can help to remember this.
    If you were unsuccessful at getting out of bed or accomplishing your goals today, remember that you haven’t lost tomorrow’s opportunity to try again.
    Give yourself the grace to accept that while some days will be difficult, some days will also be less difficult. Try to look forward to tomorrow’s fresh start.</ReadMore></p>
              </li>
              {/* 4 */}
              <li class="mb-10 ml-4">
                  <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time class="text-lg font-semibold text-gray-900 dark:text-black">Assess the parts instead of generalizing the whole</time>
                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">Depression can tinge recollections with difficult emotions. You may find yourself focusing on things that are unhelpful or perceived as difficult.
    Try to stop this overgeneralization. Push yourself to recognize the good. If it helps, write down what was meaningful about the event or day. You can track what you achieved that day, and which activities were enjoyable.
    Seeing the weight you’re giving to one thing may help you direct your thoughts away from the whole and to the individual pieces that were helpful.</p>
              </li>
          </motion.h1>

          {/* Group-2(5-6-7-8) */}
          <motion.h1
                initial={{ x: -1000 }}
                animate={{ x: 0 }}
                transition={{
                  type: "tween",
                  duration: "1",
                  delay: "1"
                }}
                >
              {/* 5 */}
              <li class="mb-10 ml-4">
                    <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time class="text-lg font-semibold text-gray-900 dark:text-black">You may find it helpful to create a routine</time>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">If depressive symptoms disrupt your daily routine, setting a gentle schedule may help you feel in control. These plans don’t have to map out an entire day.
      Focus on creating a loose, but structured, routine that can help you keep your daily pace going.</p>
                </li>
              {/* 6 */}
              <li class="mb-10 ml-4">
                  <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time class="text-lg font-semibold text-gray-900 dark:text-black">Do something you enjoy…</time>
                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">Depression can push you to give in to your fatigue. It may feel more powerful than preferred emotions.
    Try to push back and do something you love — something that’s pleasurable or meaningful. It could be playing an instrument, painting, hiking, or biking.
    The byproduct of engaging in meaningful activities can be a lift in your mood or energy, which can further motivate you to continue to engage in helpful activities that help with navigating symptoms.</p>
              </li>
              {/* 7 */}
              <li class="mb-10 ml-4">
                  <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time class="text-lg font-semibold text-gray-900 dark:text-black">Try listening to music</time>
                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">ResearchTrusted Source shows music can be a great way to boost your mood and improve symptoms of depression. It may also help you strengthenTrusted Source your reception of positive emotions.
    Music may be especially beneficial when performed in group settings, such as a musical ensemble or band.
    You can also reap some of the same rewards simply by listening.</p>
              </li>
              {/* 8 */}
              <li class="mb-10 ml-4">
                  <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time class="text-lg font-semibold text-gray-900 dark:text-black">Spend time with loved ones</time>
                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">Depression can tempt you to isolate yourself and withdraw from people you love and trust, but face-to-face time can help wash away those tendencies.
    If you’re unable to spend time together in person, phone calls or video chats can also be helpful.
    Try to remind yourself these people care about you. Resist the temptation to feel like you’re a burden. You need the interaction — and they likely do, too.
    </p>
            </li>
          </motion.h1>

          {/* Group-3(9-10-11-12) */}
          <motion.h1
                initial={{ x: -1000 }}
                animate={{ x: 0 }}
                transition={{
                  type: "tween",
                  duration: "1",
                  delay: "2"
                }}
                >
              {/* 9 */}
              <li class="mb-10 ml-4">
                  <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time class="text-lg font-semibold text-gray-900 dark:text-black">Use writing or journaling to express your feelings</time>
                  <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Consider writing or journaling about what you’re experiencing. Then, when the feelings lift, write about that, too. ResearchTrusted Source has shown that keeping a journal can be a beneficial add-on method for managing mental health conditions.
    Writing down your thoughts can help you express what you’re feeling more clearly. It can also help you keep track of what symptoms you’re having each day and identify what causes them.
    You can make a goal to write for a few minutes each day or week. Most importantly, what you want to write about is completely up to you.</p>
              </li>
              {/* 10 */}
              <li class="mb-10 ml-4">
                  <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time class="text-lg font-semibold text-gray-900 dark:text-black">Try something new entirely</time>
                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">When you do the same thing day after day, you use the same parts of your brain.
    Research shows doing new things can feel rewarding improve your overall well-being and strengthen your social relationships.
    To reap these benefits, consider trying a new sport, taking a creative class, or learning a new cooking technique.</p>
              </li>
              {/* 11 */}
              <li class="mb-10 ml-4">
                  <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time class="text-lg font-semibold text-gray-900 dark:text-black">Incorporating meditation may help ground your thoughts</time>
                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">Stress and anxiety can prolong your depression symptoms. Finding relaxation techniques can help you lower stress and invite more joy and balance into your day.
    ResearchTrusted Source suggests activities such as meditation, yoga, deep breathing, and journaling may help you improve your sense of well-being and feel more connected to what’s happening around you.</p>
              </li>
              {/* 12 */}
              <li class="mb-10 ml-4">
                  <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time class="text-lg font-semibold text-gray-900 dark:text-black">Getting enough sleep can also have a noticeable effect</time>
                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">Sleep disturbancesTrusted Source are common with depression. You may not sleep well, or you may sleep too much. Both can make depression symptoms worse.
    Aim for 8 hours of sleep per night. Try to get into a healthy sleeping routine.
    Going to bed and waking up at the same time every day can help you with your daily schedule. Getting the proper amount of sleep may also help you feel more balanced and energized throughout your day.</p>
              </li>
          </motion.h1>

          {/* Group-4(13-14-15-16) */}
          <motion.h1
                initial={{ x: -1000 }}
                animate={{ x: 0 }}
                transition={{
                  type: "tween",
                  duration: "1",
                  delay: "4"
                }}
                >
              {/* 13 */}
              <li class="mb-10 ml-4">
                  <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time class="text-lg font-semibold text-gray-900 dark:text-black">Accept the validity of your emotions</time>
                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">Suppressing and compartmentalizing your feelings may seem like a strategic way to cope with the difficult symptoms of depression. But this technique is ultimately unhealthyTrusted Source and ineffective.
    If you’re having a down day, acknowledge it. Notice and name your emotions and try to bring your attention to engaging in activities that are helpful instead of focusing on the emotions.
    Seeing the ebb and flow of depressive symptoms can be instructive for both self-healing and hope.</p>
              </li>
              {/* 14 */}
              <li class="mb-10 ml-4">
                  <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time class="text-lg font-semibold text-gray-900 dark:text-black">Consider clinical treatment</time>
                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">You may also find it helpful to speak to a professional about what you’re going through. A general practitioner may be able to refer you to a therapist or other specialist.
    They can assess your symptoms and help develop a clinical treatment plan tailored to your needs. This may include various options, such as medication and therapy.
    Finding the right treatment for you may take some time, so be open with your doctor or healthcare professional about what is and isn’t working. They’ll work with you to find the best option.</p>
              </li>
          </motion.h1>
        </ol>

      {/* Roadmap */}
      <div
        className="roadmap-box"
        style={{
          position: "absolute",
          top: "40px",
          left: "20px",
          padding: "20px",
          right: "30%",
        }}
      >
        <ol class="relative border-l border-gray-200 dark:border-gray-700">
          {/* 1 */}
          <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="text-lg font-semibold text-gray-900 dark:text-black">
              Meet yourself where you are
            </time>
            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Depression is common. It affects millions of people, including
              some in your life. You may not realize they face similar
              challenges, emotions, and obstacles. The key to navigating
              depression is to be open, accepting, and loving toward yourself
              and what you’re going through.
            </p>
            {/* <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-black-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg class="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a> */}
          </li>
          {/* 2 */}
          <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="text-lg font-semibold text-gray-900 dark:text-black">
              Consider a walk around the block or any exerciseMeet yourself
              where you are
            </time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              <ReadMore>
                On days when you feel as if you can’t get out of bed, exercise
                may seem like the last thing you’d want to do. However, exercise
                and physical activity can help to lower symptoms of depression
                and boost energy levels. ResearchTrusted Source suggests that,
                for some people, exercise can be as effective as medication at
                relieving depression symptoms. It may also help preventTrusted
                Source future depressive episodes. Even when you have the
                feeling that you’re unable to or have very little energy, see if
                you’d be willing to do the opposite of what your mood is telling
                you to do, such as curling up in bed. Instead, set a small goal
                for yourself, such as taking a walk around the block.
              </ReadMore>
            </p>
          </li>
          {/* 3 */}
          <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="text-lg font-semibold text-gray-900 dark:text-black">
              Know that today isn’t indicative of tomorrow
            </time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              <ReadMore>
                Internal emotions and thoughts can change from day to day.
                Tracking experiences through journaling or keeping a mood diary
                can help to remember this. If you were unsuccessful at getting
                out of bed or accomplishing your goals today, remember that you
                haven’t lost tomorrow’s opportunity to try again. Give yourself
                the grace to accept that while some days will be difficult, some
                days will also be less difficult. Try to look forward to
                tomorrow’s fresh start.
              </ReadMore>
            </p>
          </li>
          {/* 4 */}
          <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="text-lg font-semibold text-gray-900 dark:text-black">
              Assess the parts instead of generalizing the whole
            </time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              Depression can tinge recollections with difficult emotions. You
              may find yourself focusing on things that are unhelpful or
              perceived as difficult. Try to stop this overgeneralization. Push
              yourself to recognize the good. If it helps, write down what was
              meaningful about the event or day. You can track what you achieved
              that day, and which activities were enjoyable. Seeing the weight
              you’re giving to one thing may help you direct your thoughts away
              from the whole and to the individual pieces that were helpful.
            </p>
          </li>
          {/* 5 */}
          <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="text-lg font-semibold text-gray-900 dark:text-black">
              You may find it helpful to create a routine
            </time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              If depressive symptoms disrupt your daily routine, setting a
              gentle schedule may help you feel in control. These plans don’t
              have to map out an entire day. Focus on creating a loose, but
              structured, routine that can help you keep your daily pace going.
            </p>
          </li>
          {/* 6 */}
          <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="text-lg font-semibold text-gray-900 dark:text-black">
              Do something you enjoy…
            </time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              Depression can push you to give in to your fatigue. It may feel
              more powerful than preferred emotions. Try to push back and do
              something you love — something that’s pleasurable or meaningful.
              It could be playing an instrument, painting, hiking, or biking.
              The byproduct of engaging in meaningful activities can be a lift
              in your mood or energy, which can further motivate you to continue
              to engage in helpful activities that help with navigating
              symptoms.
            </p>
          </li>
          {/* 7 */}
          <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="text-lg font-semibold text-gray-900 dark:text-black">
              Try listening to music
            </time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              ResearchTrusted Source shows music can be a great way to boost
              your mood and improve symptoms of depression. It may also help you
              strengthenTrusted Source your reception of positive emotions.
              Music may be especially beneficial when performed in group
              settings, such as a musical ensemble or band. You can also reap
              some of the same rewards simply by listening.
            </p>
          </li>
          {/* 8 */}
          <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="text-lg font-semibold text-gray-900 dark:text-black">
              Spend time with loved ones
            </time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              Depression can tempt you to isolate yourself and withdraw from
              people you love and trust, but face-to-face time can help wash
              away those tendencies. If you’re unable to spend time together in
              person, phone calls or video chats can also be helpful. Try to
              remind yourself these people care about you. Resist the temptation
              to feel like you’re a burden. You need the interaction — and they
              likely do, too.
            </p>
          </li>
          {/* 9 */}
          <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="text-lg font-semibold text-gray-900 dark:text-black">
              Use writing or journaling to express your feelings
            </time>
            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Consider writing or journaling about what you’re experiencing.
              Then, when the feelings lift, write about that, too.
              ResearchTrusted Source has shown that keeping a journal can be a
              beneficial add-on method for managing mental health conditions.
              Writing down your thoughts can help you express what you’re
              feeling more clearly. It can also help you keep track of what
              symptoms you’re having each day and identify what causes them. You
              can make a goal to write for a few minutes each day or week. Most
              importantly, what you want to write about is completely up to you.
            </p>
          </li>
          {/* 10 */}
          <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="text-lg font-semibold text-gray-900 dark:text-black">
              Try something new entirely
            </time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              When you do the same thing day after day, you use the same parts
              of your brain. Research shows doing new things can feel rewarding
              improve your overall well-being and strengthen your social
              relationships. To reap these benefits, consider trying a new
              sport, taking a creative class, or learning a new cooking
              technique.
            </p>
          </li>
          {/* 11 */}
          <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="text-lg font-semibold text-gray-900 dark:text-black">
              Incorporating meditation may help ground your thoughts
            </time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              Stress and anxiety can prolong your depression symptoms. Finding
              relaxation techniques can help you lower stress and invite more
              joy and balance into your day. ResearchTrusted Source suggests
              activities such as meditation, yoga, deep breathing, and
              journaling may help you improve your sense of well-being and feel
              more connected to what’s happening around you.
            </p>
          </li>
          {/* 12 */}
          <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="text-lg font-semibold text-gray-900 dark:text-black">
              Getting enough sleep can also have a noticeable effect
            </time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              Sleep disturbancesTrusted Source are common with depression. You
              may not sleep well, or you may sleep too much. Both can make
              depression symptoms worse. Aim for 8 hours of sleep per night. Try
              to get into a healthy sleeping routine. Going to bed and waking up
              at the same time every day can help you with your daily schedule.
              Getting the proper amount of sleep may also help you feel more
              balanced and energized throughout your day.
            </p>
          </li>
          {/* 13 */}
          <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="text-lg font-semibold text-gray-900 dark:text-black">
              Accept the validity of your emotions
            </time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              Suppressing and compartmentalizing your feelings may seem like a
              strategic way to cope with the difficult symptoms of depression.
              But this technique is ultimately unhealthyTrusted Source and
              ineffective. If you’re having a down day, acknowledge it. Notice
              and name your emotions and try to bring your attention to engaging
              in activities that are helpful instead of focusing on the
              emotions. Seeing the ebb and flow of depressive symptoms can be
              instructive for both self-healing and hope.
            </p>
          </li>
          {/* 14 */}
          <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="text-lg font-semibold text-gray-900 dark:text-black">
              Consider clinical treatment
            </time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              You may also find it helpful to speak to a professional about what
              you’re going through. A general practitioner may be able to refer
              you to a therapist or other specialist. They can assess your
              symptoms and help develop a clinical treatment plan tailored to
              your needs. This may include various options, such as medication
              and therapy. Finding the right treatment for you may take some
              time, so be open with your doctor or healthcare professional about
              what is and isn’t working. They’ll work with you to find the best
              option.
            </p>
          </li>
        </ol>
      </div>
    </div>
  </div>
  );
}


export default Roadmap;
