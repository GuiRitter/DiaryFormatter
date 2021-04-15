package io.github.guiritter.hour_minute_formatter;

import java.awt.BorderLayout;

import javax.swing.JButton;
import javax.swing.JDialog;
import javax.swing.JFrame;
import javax.swing.JScrollPane;
import javax.swing.JTextArea;

/**
 *
 * @author Guilherme Alan Ritter
 */
public class Main {

    static {
        JFrame.setDefaultLookAndFeelDecorated(true);
        JDialog.setDefaultLookAndFeelDecorated(true);
    }

    public static void main(String args[]) {
        JFrame frame = new JFrame("Hour Minute Formatter");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        JScrollPane pane = new JScrollPane();
        frame.add(pane, BorderLayout.CENTER);

        JTextArea area = new JTextArea();
        pane.setViewportView(area);
        area.setRows(10);
        area.setColumns(25);

        JButton button = new JButton("format");
        frame.add(button, BorderLayout.PAGE_END);
        button.addActionListener(event -> area.setText(area.getText().replaceAll("([0-9]{2})([0-9]{2})", "$1:$2\\. ")));

        frame.setVisible(true);
        frame.pack();
        frame.setLocationRelativeTo(null);
    }
}
